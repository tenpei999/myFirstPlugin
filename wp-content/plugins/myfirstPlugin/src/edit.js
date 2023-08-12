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
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';
import getWeatherInfo from './hooks/getWeatherInfo';
import { CurrentWeather } from './components/CurrentWeather';
import { WeekWeather } from './components/WeekWeathew';

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

/*日付
-----------------------*/
const getDates = () => {
	const dates = [];

	for (let i = 0; i <= 6; i++) {
		const currentDate = new Date();
		currentDate.setDate(currentDate.getDate() + i);

		const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 0から始まるので1を加算
		const day = String(currentDate.getDate()).padStart(2, '0');

		dates.push(`${month}/${day}`);
	}
	return dates;
};
const datesForWeek = getDates();

export default function Edit() {

	const [data1, setData1] = useState(null);
	const [data2, setData2] = useState(null);
	const [todayWeather, setTodayWeather] = useState();
	const [tomorrowWeather, setTomorrowWeather] = useState();
	const [weeklyWeather, setWeeklyWeather] = useState([]);

	useEffect(() => {
		// 1つ目のAPIリクエスト
		const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
			.then(response => response.json());

		// 2つ目のAPIリクエスト
		const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo')
			.then(response => response.json());

		// 両方のリクエストが完了したら処理を実行
		Promise.all([request1, request2])
			.then(data => {
				const weatherCodesForWeek = data[1].daily.weathercode.slice(0, 7); // 本日から6日後までの天気コード

				// 天気コードを天気名に変換
				const weatherNamesForWeek = weatherCodesForWeek.map(code => getWeatherInfo(code).label);
				const weatherImageForWeek = weatherCodesForWeek.map(code => getWeatherInfo(code).icon);
				const highestTemperatureForWeek = data[1].daily.temperature_2m_max.slice(0, 7); // 本日から6日後までの天気コード
				const lowestTemperatureForWeek = data[1].daily.temperature_2m_min.slice(0, 7); // 本日から6日後までの天気コード

				// 1週間分の当日の最高気温と前日の最高気温の差分
				const highestTemperatureDifferencesForWeek = [];

				for (let i = 0; i < highestTemperatureForWeek.length; i++) {
					const todayMaxTemperature = highestTemperatureForWeek[i];
					const yesterdayMaxTemperature = (i > 0) ? highestTemperatureForWeek[i - 1] : todayMaxTemperature;
					const temperatureDifference = Math.ceil((todayMaxTemperature - yesterdayMaxTemperature) * 10) / 10;
					const formattedDifference = (temperatureDifference >= 0) ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;

					highestTemperatureDifferencesForWeek.push(formattedDifference);
				}

				// 1週間分の当日の最低気温と前日の最低気温の差分
				const lowestTemperatureDifferencesForWeek = [];

				for (let i = 0; i < lowestTemperatureForWeek.length; i++) {
					const todayMinTemperature = lowestTemperatureForWeek[i];
					const yesterdayMinTemperature = (i > 0) ? lowestTemperatureForWeek[i - 1] : todayMinTemperature;
					const temperatureDifference = Math.ceil((todayMinTemperature - yesterdayMinTemperature) * 10) / 10;
					const formattedDifference = (temperatureDifference >= 0) ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;

					lowestTemperatureDifferencesForWeek.push(formattedDifference);
				}
				/* 時間帯毎の天気 */
				const timeFrames = ['T00_06', 'T06_12', 'T12_18', 'T18_24'];
				const threeDayRainProbability = data[0].forecasts.slice(0, 3).map(dayForecast => {
					return timeFrames.map(timeFrame => {
						return dayForecast.chanceOfRain[timeFrame];
					});
				});

				const dailyData = weatherNamesForWeek.map((name, index) => ({
					day: datesForWeek[index],
					name,
					image: weatherImageForWeek[index],
					highestTemperature: highestTemperatureForWeek[index],
					lowestTemperature: lowestTemperatureForWeek[index],
					maximumTemperatureComparison: highestTemperatureDifferencesForWeek[index],
					lowestTemperatureComparison: lowestTemperatureDifferencesForWeek[index],
					rainProbability: threeDayRainProbability[index]
				}));

				console.log(dailyData);

				// 今日と明日の天気データをセット
				setTodayWeather(dailyData[0]);
				setTomorrowWeather(dailyData[1]);

				// 週間の天気データをセット
				setWeeklyWeather(dailyData.slice(2));
			})
			.catch(error => {
				console.error('APIの呼び出しに失敗:', error);
			});

	}, []); // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

	// 今日、明日、週間の天気データを小コンポーネントに渡す
	const TodayWeatherComponentProps = {
		weather: todayWeather,
	};

	const TomorrowWeatherComponentProps = {
		weather: tomorrowWeather,
	};

	const WeeklyWeatherComponentProps = {
		weather: weeklyWeather,
	};

	return (
		<>
			<div {...useBlockProps()}>
				<CurrentWeather {...TodayWeatherComponentProps} />
				<CurrentWeather  {...TomorrowWeatherComponentProps} />
				{weeklyWeather.map((weather, index) => (
					<WeekWeather key={index} weather={weather} />
				))}
			</div>
		</>
	);
}
