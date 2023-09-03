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
import { useState, useRef } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import './editor.scss';
import './style.scss';
import { CurrentWeather } from './components/CurrentWeather';
import WeekWeather from './components/WeekWeather';
import useBlockSelection from './hooks/useOutsideClick';
import { useWeatherData } from './hooks/useWeatherData';

export default function Edit({ attributes, setAttributes }) {

	// 他の状態変数とともに、これらを初期化します：
	const [showHoliday, setShowHoliday] = useState(attributes.showHoliday);
	const [showPrecipitation, setShowPrecipitation] = useState(attributes.showPrecipitation);
	const ref = useRef(null);
	const cachedWeather = useWeatherData(setAttributes);

	// console.log(cachedWeather);
	// console.log(attributes);

	const { showSelection, handleLayoutClick } = useBlockSelection();

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
		<div {...blockProps} >
			<div onClick={handleLayoutClick} ref={ref}>
				{showSelection ? (
					<div className="checkbox-wrapper">
						<div className="detail-settings">
							<CheckboxControl
								label="今日の天気を表示"
								checked={attributes.todayWeather !== null}
								// onChange={(checked) => setAttributes({ todayWeather: checked ? cachedWeather.today : null })}
								onChange={(checked) => {
									setAttributes({ tomorrowWeather: checked ? cachedWeather.tomorrow : null });
								}}
							/>
							<CheckboxControl
								label="明日の天気を表示"
								checked={attributes.tomorrowWeather !== null}
								onChange={(checked) => setAttributes({ tomorrowWeather: checked ? cachedWeather.tomorrow : null })}
							/>
							<CheckboxControl
								label="週間の天気を表示"
								checked={attributes.weeklyWeather !== null}
								onChange={(checked) => setAttributes({ weeklyWeather: checked ? cachedWeather.weekly : null })}
							/>
							<h4>詳細設定</h4>
							<CheckboxControl
								label="祝日を表示"
								checked={showHoliday}
								onChange={(checked) => {
									setShowHoliday(checked);
									setAttributes({ showHoliday: checked });
								}}
							/>
							<CheckboxControl
								label="降水確率を表示"
								checked={showPrecipitation}
								onChange={(checked) => {
									setShowPrecipitation(checked);
									setAttributes({ showPrecipitation: checked });
								}}
							/>
						</div>
					</div>
				) : (
					<div className="layout">
						<div className="today-and-tomorrow weather-layout">
							{attributes.todayWeather &&
								<CurrentWeather
									{...TodayWeatherComponentProps}
									title="今日の天気"
									showHoliday={attributes.showHoliday}
									showPrecipitation={attributes.showPrecipitation}
								/>}
							{attributes.tomorrowWeather &&
								<CurrentWeather
									{...TomorrowWeatherComponentProps}
									title="明日の天気"
									showHoliday={attributes.showHoliday}
									showPrecipitation={attributes.showPrecipitation}
								/>}
						</div>
						{!showSelection && attributes.weeklyWeather && <WeekWeather {...WeeklyWeatherComponentProps} />}
					</div>
				)}
			</div>
		</div>
	);
}
