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
import { useEffect } from '@wordpress/element';
import './editor.scss';
import './style.scss';
import weatherObject from './hooks/weatherObject';
import { CurrentWeather } from './components/CurrentWeather';
import { WeekWeather } from './components/WeekWeather';

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

export default function Edit({ attributes, setAttributes }) {

	useEffect(() => {
		weatherObject(
			(todayData) => {
				setAttributes({ todayWeather: todayData });
			},
			(tomorrowData) => {
				setAttributes({ tomorrowWeather: tomorrowData });
			},
			(weeklyData) => {
				setAttributes({ weeklyWeather: weeklyData });
			}
		);
	}, []); // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

	// 今日、明日、週間の天気データを小コンポーネントに渡す
	const TodayWeatherComponentProps = {
		weather: attributes.todayWeather,
	};

	const TomorrowWeatherComponentProps = {
		weather: attributes.tomorrowWeather,
	};

	const WeeklyWeatherComponentProps = {
		weather: attributes.weeklyWeather,
	};

	const blockProps = useBlockProps({
		className: 'my-first-plugin'
});

	return (
		<div {...blockProps}>
			<div className="layout" >
				<CurrentWeather {...TodayWeatherComponentProps}
					title="今日の天気"
				/>
				<CurrentWeather  {...TomorrowWeatherComponentProps}
					title="明日の天気"
				/>
			</div>
			<WeekWeather {...WeeklyWeatherComponentProps} />
		</div>
	);
}
