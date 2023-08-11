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

const weatherAndTemp = [
	{ name: "Takashi", age: 19, country: "Japan" },
	{ name: "Jane", age: 28, country: "UK", color: "red" },
];
export default function Edit() {

	const [data1, setData1] = useState(null);
	const [data2, setData2] = useState(null);

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
				const temperatureDifferencesForWeek = highestTemperatureForWeek.map((maxTemp, index) => {
					const difference = maxTemp - lowestTemperatureForWeek[index];
					return Math.ceil(difference * 10) / 10; // 小数点第二位以下を切り上げ
				});

				/* 時間帯毎の天気 */
				const timeFrames = ['T00_06', 'T06_12', 'T12_18', 'T18_24'];
				const threeDayRainProbability = data[0].forecasts.slice(0, 3).map(dayForecast => {
					return timeFrames.map(timeFrame => {
						return dayForecast.chanceOfRain[timeFrame];
					});
				});
			})
			.catch(error => {
				console.error('APIの呼び出しに失敗:', error);
			});

	}, []); // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

	const weatherInformation = [
		{ name: today,  },
	];



	return (
		<>
			<div {...useBlockProps()}>
				<CurrentWeather apiData1={data1} apiData2={data2} />
				<CurrentWeather apiData1={data1} apiData2={data2} />
				<WeekWeather apiData1={data1} apiData2={data2} />
			</div>
		</>
	);
}
