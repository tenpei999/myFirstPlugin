/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
// import { Placeholder, TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {

	/**
 * WMOのweatherCodeに対応する、天候名とアイコンを返す
 *
 * アイコンは気象庁の利用規約に基づいて使用させて頂いております。
 * 出典: 気象庁「https://www.jma.go.jp/bosai/forecast/img/100.svg」,
				気象庁「https://www.jma.go.jp/bosai/forecast/img/101.svg」,
				気象庁「https://www.jma.go.jp/bosai/forecast/img/200.svg」,
				気象庁「https://www.jma.go.jp/bosai/forecast/img/202.svg」,
				気象庁「https://www.jma.go.jp/bosai/forecast/img/300.svg」,
				気象庁「https://www.jma.go.jp/bosai/forecast/img/302.svg」,
				気象庁「https://www.jma.go.jp/bosai/forecast/img/400.svg」
 * @link https://www.jma.go.jp/jma/kishou/info/coment.html
 *
 * @param {number} weatherCode WMOに基づくweatherCode
 * @returns {Object<label<String>, icon<String>>} weatherコードに対応するラベルとアイコンを格納したオブジェクト
 */
	const getWeatherInfo = (weatherCode) => {
		// 0 : Clear Sky
		if (weatherCode === 0) {
			return { label: "快晴", icon: "./static/img/100.svg" };
		}
		if (weatherCode === 1) {
			return { label: "晴れ", icon: "./static/img/100.svg" };
		}
		// 2 : Partly Cloudy
		if (weatherCode === 2) {
			return { label: "一部曇", icon: "./static/img/101.svg" };
		}
		// 3 : Overcast
		if (weatherCode === 3) {
			return { label: "曇り", icon: "./static/img/200.svg" };
		}
		// 45, 48 : Fog And Depositing Rime Fog
		if (weatherCode <= 49) {
			return { label: "霧", icon: "./static/img/200.svg" };
		}
		// 51, 53, 55 : Drizzle Light, Moderate And Dense Intensity ・ 56, 57 : Freezing Drizzle Light And Dense Intensity
		if (weatherCode <= 59) {
			return { label: "霧雨", icon: "./static/img/202.svg" };
		}
		// 61, 63, 65 : Rain Slight, Moderate And Heavy Intensity ・66, 67 : Freezing Rain Light And Heavy Intensity
		if (weatherCode <= 69) {
			return { label: "雨", icon: "./static/img/300.svg" };
		}
		// 71, 73, 75 : Snow Fall Slight, Moderate And Heavy Intensity ・ 77 : Snow Grains
		if (weatherCode <= 79) {
			return { label: "雪", icon: "./static/img/400.svg" };
		}
		// 80, 81, 82 : Rain Showers Slight, Moderate And Violent
		if (weatherCode <= 84) {
			return { label: "俄か雨", icon: "./static/img/302.svg" };
		}
		// 85, 86 : Snow Showers Slight And Heavy
		if (weatherCode <= 94) {
			return { label: "雪・雹", icon: "./static/img/400.svg" };
		}
		// 95 : Thunderstorm Slight Or Moderate ・ 96, 99 : Thunderstorm With Slight And Heavy Hail
		if (weatherCode <= 99) {
			return { label: "雷雨", icon: "./static/img/300.svg" };
		}
		// その他はエラーとする
		console.log(weatherCode[0]);
		return { label: "ERROR", icon: "" };
	};

	window.addEventListener('DOMContentLoaded', () => {
		getWeatherInfo();
	});

	// 1つ目のAPIリクエスト
	const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
		.then(response => response.json());

	// 2つ目のAPIリクエスト
	const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo')
		.then(response => response.json());

	// 両方のリクエストが完了したら処理を実行
	Promise.all([request1, request2])
		.then(data => {
			const data1 = data[0]; // 1つ目のAPIのレスポンスデータ
			const data2 = data[1]; // 2つ目のAPIのレスポンスデータ


			/*日付
			-----------------------*/
			function formatDate(dateString) {
				const months = [
					"1月", "2月", "3月", "4月", "5月", "6月",
					"7月", "8月", "9月", "10月", "11月", "12月"
				];
				const days = ["日", "月", "火", "水", "木", "金", "土"];
				const date = new Date(dateString);
				const month = months[date.getMonth()];
				const day = date.getDate();
				const dayOfWeek = days[date.getDay()];
				return `${month}${day}日(${dayOfWeek})`;
			}

			const currentDate = new Date(); // 現在の日付を取得

			function displayFutureDate(daysToAdd, elementId) {
				const futureDate = new Date(currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
				const formattedFutureDate = formatDate(futureDate);
				const futureDateElement = document.getElementById(elementId);
				futureDateElement.innerHTML = formattedFutureDate;
			}

			// 明後日の日付
			displayFutureDate(2, 'dayAfterTommorow');
			// 三日後の日付
			displayFutureDate(3, 'threeDayLater');
			// 四日後の日付
			displayFutureDate(4, 'fourDayLater');
			// 五日後の日付
			displayFutureDate(5, 'fiveDayLater');
			// 六日後の日付
			displayFutureDate(6, 'sixDayLater');


			function displayWeatherInfo(dayIndex, elementId) {
				const weatherID = data2.daily.weathercode[dayIndex];
				const weather = getWeatherInfo(weatherID).label;
				const weatherElement = document.getElementById(elementId);
				weatherElement.innerHTML = weather;
			}

			// 今日の天気
			displayWeatherInfo(1, 'todaysWeather');

			// 明日の天気
			displayWeatherInfo(2, 'tommorowsWeather');

			// 明後日の天気
			displayWeatherInfo(3, 'dayAfterTommorowWeather');

			// 三日後の天気
			displayWeatherInfo(4, 'threeDayLaterWeather');

			// 四日後の天気
			displayWeatherInfo(5, 'fourDayLaterWeather');

			// 五日後の天気
			displayWeatherInfo(6, 'fiveDayLaterWeather');

			// 六日後の天気
			displayWeatherInfo(7, 'sixDayLaterWeather');


			function displayWeatherIcon(weatherID, elementId) {
				const weatherImg = getWeatherInfo(weatherID).icon;
				const parentElement = document.getElementById(elementId);
				const imgElement = document.createElement('img');
				imgElement.src = weatherImg;
				parentElement.appendChild(imgElement);
			}

			// 今日の天気アイコン
			displayWeatherIcon(todaysWeatherID, 'todaysWeatherImg');

			// 明日の天気アイコン
			displayWeatherIcon(tommorowsWeatherID, 'tommorowsWeatherImg');

			// 明後日の天気アイコン
			displayWeatherIcon(dayAfterTommorowWeatherID, 'dayAfterTommorowWeatherImg');

			// 三日後の天気アイコン
			displayWeatherIcon(threeDayLaterWeatherID, 'threeDayLaterWeatherImg');

			// 四日後の天気アイコン
			displayWeatherIcon(fourDayLaterWeatherID, 'fourDayLaterWeatherImg');

			// 五日後の天気アイコン
			displayWeatherIcon(fiveDayLaterWeatherID, 'fiveDayLaterWeatherImg');

			// 六日後の天気アイコン
			displayWeatherIcon(sixDayLaterWeatherID, 'sixDayLaterWeatherImg');

			function displayTemperature(tempData, index, elementIdPrefix) {
				const temperature = tempData[index];
				const elementId = elementIdPrefix + days[index];
				const tempElement = document.getElementById(elementId);
				tempElement.innerHTML = temperature;
			}

			const days = ['yesterday', 'todays', 'tommorows', 'dayAfterTommorow', 'threeDayLater', 'fourDayLater', 'fiveDayLater', 'sixDayLater'];

			// Display 最高気温 & 最低気温
			['TempMax', 'TempMin'].forEach(tempType => {
				for (let i = 0; i < days.length; i++) {
					if (tempType === 'TempMax') {
						displayTemperature(data2.daily.temperature_2m_max, i, days[i]);
					} else {
						displayTemperature(data2.daily.temperature_2m_min, i, days[i]);
					}
				}
			});

			// 差分を計算して表示する関数
			function calculateAndDisplayDifference(currentTemp, previousTemp, elementID) {
				const difference = Math.floor(currentTemp - previousTemp);
				const sign = difference > 0 ? "+" : "";
				const element = document.getElementById(elementID);
				element.innerHTML = '[' + sign + difference + ']';
			}

			// Display 前日比 for 最高気温 & 最低気温
			['Max', 'Min'].forEach(tempType => {
				for (let i = 1; i < days.length; i++) {
					const currentTempVarName = days[i] + "Temp" + tempType;
					const previousTempVarName = days[i - 1] + "Temp" + tempType;
					const elementID = 'DBR' + days[i] + tempType;

					calculateAndDisplayDifference(
						window[currentTempVarName],
						window[previousTempVarName],
						elementID
					);
				}
			});

			/* 時間帯毎の天気 */
			const timeFrames = ['T00_06', 'T06_12', 'T12_18', 'T18_24'];

			function displayChanceOfRain(day, dayIndex) {
				timeFrames.forEach((timeFrame, idx) => {
					const chanceOfRain = data1.forecasts[dayIndex].chanceOfRain[timeFrame];
					const elementId = day + 'chanceOfRain' + (idx + 1);
					const element = document.getElementById(elementId);
					element.innerHTML = chanceOfRain;
				});
			}

			displayChanceOfRain('todays', 0);
			displayChanceOfRain('tommorows', 1);

		});

	return (
		<div {...useBlockProps()}>
			<section class="c-bg__color p-weather--today u-pb80 u-pt80">
				<h2 class="c-title__section">
					<p>
						今日/明日の天気
					</p>
				</h2>
				<div class="l-inner p-weather--today__days">
					<article class="c-weather is-today">
						<h3 class="c-title__weather">今日の天気</h3>
						<p id="todaysWeather" class="c-weather__weather"></p>
						<span id="todaysWeatherImg" class="c-weather__img"></span>
						<ul class="c-weather__temp--wrapper">
							<li class="c-weather__temp--left">
								<p class="max"><span id="todaysTempMax"></span><span class="celsius">℃</span></p>
								<p id="DBRTodaysMax" class="dbr-max"></p>
							</li>
							<li class="c-weather__temp--right">
								<p class="min"><span id="todaysTempMin"></span><span class="celsius">℃</span></p>
								<p id="DBRTodayMin" class="dbr-min"></p>
							</li>
						</ul>

						<ul class="c-weather__chanceOfRain">
							<li class="c-weather__chanceOfRain-index">
								<p class="time">時間</p>
								<p class="rain">降水</p>
							</li>
							<li class="c-weather__chanceOfRain-timezone1">
								<p class="time">0-6時</p>
								<p id="todayschanceOfRain1" class="rain"></p>
							</li>
							<li class="c-weather__chanceOfRain-timezone2">
								<p class="time">6-12時</p>
								<p id="todayschanceOfRain2" class="rain"></p>
							</li>
							<li class="c-weather__chanceOfRain-timezone3">
								<p class="time">12-18時</p>
								<p id="todayschanceOfRain3" class="rain"></p>
							</li>
							<li class="c-weather__chanceOfRain-timezone4">
								<p class="time">18-24時</p>
								<p id="todayschanceOfRain4" class="rain"></p>
							</li>
						</ul>
					</article>
					<article class="c-weather is-tomorrow">
						<h3 class="c-title__weather is-tomorrow">明日の天気</h3>
						<p id="tommorowsWeather" class="c-weather__weather"></p>
						<span id="tommorowsWeatherImg" class="c-weather__img"></span>
						<ul class="c-weather__temp--wrapper">
							<li class="c-weather__temp--left">
								<p class="max"><span id="tommorowsTempMax"></span><span class="celsius">℃</span></p>
								<p id="DBRTommorowMax" class="dbr-max"></p>
							</li>
							<li class="c-weather__temp--right">
								<p class="min"><span id="tommorowsTempMin"></span><span class="celsius">℃</span></p>
								<p id="DBRTommorowMin" class="dbr-min"></p>
							</li>
						</ul>
						<ul class="c-weather__chanceOfRain">
							<li class="c-weather__chanceOfRain-index">
								<p class="time">時間</p>
								<p class="rain">降水</p>
							</li>
							<li class="c-weather__chanceOfRain-timezone1">
								<p class="time">0-6時</p>
								<p id="tommorowschanceOfRain1" class="rain"></p>
							</li>
							<li class="c-weather__chanceOfRain-timezone2">
								<p class="time">6-12時</p>
								<p id="tommorowschanceOfRain2" class="rain"></p>
							</li>
							<li class="c-weather__chanceOfRain-timezone3">
								<p class="time">12-18時</p>
								<p id="tommorowschanceOfRain3" class="rain"></p>
							</li>
							<li class="c-weather__chanceOfRain-timezone4">
								<p class="time">18-24時</p>
								<p id="tommorowschanceOfRain4" class="rain"></p>
							</li>
						</ul>
					</article>
				</div>
			</section>
			<section class="p-weather--week u-pb80 u-pt80">
				<h2 class="c-title__section">
					<p>
						今週の天気
					</p>
				</h2>
				<div class="l-inner">
					<ul class="p-weather--week__container">
						<li class="dayAfterTommorw c-weather is-week">
							<h3 id="dayAfterTommorow" class="c-title__weather"></h3>
							<p id="dayAfterTommorowWeather" class="c-weather__weather"></p>
							<span id="dayAfterTommorowWeatherImg" class="c-weather__img"></span>
							<ul class="c-weather__temp--wrapper">
								<li class="c-weather__temp--left">
									<p class="max"><span id="dayAfterTommorowTempMax"></span><span class="celsius">℃</span></p>
									<p id="DBRDayAfterTommorowMax" class="dbr-max"></p>
								</li>
								<li class="c-weather__temp--right">
									<p class="min"><span id="dayAfterTommorowTempMin"></span><span class="celsius">℃</span></p>
									<p id="DBRDayAfterTommorowMin" class="dbr-min"></p>
								</li>
							</ul>
						</li>
						<li class="threeDayLayter c-weather is-week">
							<h3 id="threeDayLater" class="c-title__weather"></h3>
							<p id="threeDayLaterWeather" class="c-weather__weather"></p>
							<span id="threeDayLaterWeatherImg" class="c-weather__img"></span>
							<ul class="c-weather__temp--wrapper">
								<li class="c-weather__temp--left">
									<p class="max"><span id="threeDayLaterTempMax"></span><span class="celsius">℃</span></p>
									<p id="DBRthreeDayLaterMax" class="dbr-max"></p>
								</li>
								<li class="c-weather__temp--right">
									<p class="min"><span id="threeDayLaterTempMin"></span><span class="celsius">℃</span></p>
									<p id="DBRthreeDayLaterMin" class="dbr-min"></p>
								</li>
							</ul>
						</li>
						<li class="foureDaiLayter c-weather is-week">
							<h3 id="fourDayLater" class="c-title__weather"></h3>
							<p id="fourDayLaterWeather" class="c-weather__weather"></p>
							<span id="fourDayLaterWeatherImg" class="c-weather__img"></span>
							<ul class="c-weather__temp--wrapper">
								<li class="c-weather__temp--left">
									<p class="max"><span id="fourDayLaterTempMax"></span><span class="celsius">℃</span></p>
									<p id="DBRfourDayLaterMax" class="dbr-max"></p>
								</li>
								<li class="c-weather__temp--right">
									<p class="min"><span id="fourDayLaterTempMin"></span><span class="celsius">℃</span></p>
									<p id="DBRfourDayLaterMin" class="dbr-min"></p>
								</li>
							</ul>
						</li>
						<li class="fiveDayLaiter c-weather is-week">
							<h3 id="fiveDayLater" class="c-title__weather"></h3>
							<p id="fiveDayLaterWeather" class="c-weather__weather"></p>
							<span id="fiveDayLaterWeatherImg" class="c-weather__img"></span>
							<ul class="c-weather__temp--wrapper">
								<li class="c-weather__temp--left">
									<p class="max"><span id="fiveDayLaterTempMax"></span><span class="celsius">℃</span></p>
									<p id="DBRfiveDayLaterMax" class="dbr-max"></p>
								</li>
								<li class="c-weather__temp--right">
									<p class="min"><span id="fiveDayLaterTempMin"></span><span class="celsius">℃</span></p>
									<p id="DBRfiveDayLaterMin" class="dbr-min"></p>
								</li>
							</ul>
						</li>
						<li class="sixDayLater c-weather is-week">
							<h3 id="sixDayLater" class="c-title__weather"></h3>
							<p id="sixDayLaterWeather" class="c-weather__weather"></p>
							<span id="sixDayLaterWeatherImg" class="c-weather__img"></span>
							<ul class="c-weather__temp--wrapper">
								<li class="c-weather__temp--left">
									<p class="max"><span id="sixDayLaterTempMax"></span><span class="celsius">℃</span></p>
									<p id="DBRsixDayLaterMax" class="dbr-max"></p>
								</li>
								<li class="c-weather__temp--right">
									<p class="min"><span id="sixDayLaterTempMin"></span><span class="celsius">℃</span></p>
									<p id="DBRsixDayLaterMin" class="dbr-min"></p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
