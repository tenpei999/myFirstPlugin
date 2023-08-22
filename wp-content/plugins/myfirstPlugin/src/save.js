/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
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
	const blockProps = useBlockProps.save({
		className: 'wp-block-create-block-my-first-plugin my-first-plugin'
	});

	return (
		<div {...blockProps}>
			<div className="layout">
				{attributes.todayWeather && (
					<CurrentWeather
						weather={attributes.todayWeather}
						title="今日の天気"
						showHoliday={attributes.showHoliday}
						showPrecipitation={attributes.showPrecipitation}
					/>
				)}
				{attributes.tomorrowWeather && (
					<CurrentWeather
						weather={attributes.tomorrowWeather}
						title="明日の天気"
						showHoliday={attributes.showHoliday}
						showPrecipitation={attributes.showPrecipitation}
					/>
				)}
				{attributes.weeklyWeather && <WeekWeather weather={attributes.weeklyWeather} />}
			</div>
		</div>
	);
}