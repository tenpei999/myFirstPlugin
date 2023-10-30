/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';


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

import { CurrentWeather } from './components/CurrentWeather';
import WeekWeather from './components/WeekWeather';
import './style.scss';

export default function Save({ attributes }) {


	const TodayWeatherComponentProps = {
		weather: attributes.todayWeather,
	};

	const TomorrowWeatherComponentProps = {
		weather: attributes.tomorrowWeather,
	};

	const WeeklyWeatherComponentProps = {
		weather: attributes.weeklyWeather,
	};

	const blockProps = useBlockProps.save({
		className: 'j-weather-customizer'
	});

	if (!TodayWeatherComponentProps) return null; 
	if (!TomorrowWeatherComponentProps) return null; 
	if (!WeeklyWeatherComponentProps) return null; 

	return (
		<div {...blockProps}>
			<div className="layout">
				<div className="today-and-tomorrow weather-layout">
					{attributes.todayWeather &&
						<CurrentWeather
							{...TodayWeatherComponentProps}
							title="今日の天気"
						/>}
					{attributes.tomorrowWeather &&
						<CurrentWeather
							{...TomorrowWeatherComponentProps}
							title="明日の天気"
						/>}
				</div>
				{attributes.weeklyWeather && <WeekWeather {...WeeklyWeatherComponentProps} />}
			</div>
		</div>
	);
}
