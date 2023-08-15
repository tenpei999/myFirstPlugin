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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	const TodayWeatherComponentProps = {
		weather: attributes.todayWeather,
	};

	const TomorrowWeatherComponentProps = {
		weather: attributes.tomorrowWeather,
	};

	const WeeklyWeatherComponentProps = {
		weather: attributes.weeklyWeather,
	};
	return (
		<div {...blockProps}>
			<div className="layout">
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
