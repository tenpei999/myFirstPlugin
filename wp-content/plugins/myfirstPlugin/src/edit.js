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
import { CheckboxControl } from '@wordpress/components';
import './editor.scss';
import './style.scss';
import weatherObject from './hooks/weatherObject';
import { CurrentWeather } from './components/CurrentWeather';
import { WeekWeather } from './components/WeekWeather';

export default function Edit({ attributes, setAttributes }) {
	const [showSelection, setShowSelection] = useState(false);
	const [showHoliday, setShowHoliday] = useState(true);
	const [showPrecipitation, setShowPrecipitation] = useState(true);

	// 新しいキャッシュ用のステートを追加
	const [cachedWeather, setCachedWeather] = useState({
		today: null,
		tomorrow: null,
		weekly: null
	});

	useEffect(() => {
		const handleDocumentClick = (e) => {
			if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
				return; // もしクリックされた要素がチェックボックスのinputタグであれば、早期に関数を終了します
			}

			// ブロックの外をクリックすると、天気情報を表示する画面に切り替わる
			if (!e.target.closest('.my-first-plugin')) {
				setShowSelection(false);
			}
		};

		document.addEventListener('mousedown', handleDocumentClick);

		return () => {
			document.removeEventListener('mousedown', handleDocumentClick);
		};

	}, []);

	const handleLayoutClick = (e) => {
		e.stopPropagation();
		if (!showSelection) {
			setShowSelection(true);
		}
	};

	useEffect(() => {
		weatherObject(
			(todayData) => {
				setCachedWeather(prev => ({ ...prev, today: todayData }));
				setAttributes({ todayWeather: todayData });
			},
			(tomorrowData) => {
				setCachedWeather(prev => ({ ...prev, tomorrow: tomorrowData }));
				setAttributes({ tomorrowWeather: tomorrowData });
			},
			(weeklyData) => {
				setCachedWeather(prev => ({ ...prev, weekly: weeklyData }));
				setAttributes({ weeklyWeather: weeklyData });
			}
		);
	}, []);

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
			<div className="layout" onClick={handleLayoutClick}>
				{showSelection ? (
					<div className="checkbox-wrapper">
						{/* 既存のチェックボックス... */}
						<div className="detail-settings">
							<CheckboxControl
								label="今日の天気を表示"
								checked={attributes.todayWeather !== null}
								onChange={(checked) => setAttributes({ todayWeather: checked ? cachedWeather.today : null })}
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
								onChange={setShowHoliday}
							/>
							<CheckboxControl
								label="降水確率を表示"
								checked={showPrecipitation}
								onChange={setShowPrecipitation}
							/>
						</div>
					</div>
				) : (
					<>
						{attributes.todayWeather &&
							<CurrentWeather
								{...TodayWeatherComponentProps}
								title="今日の天気"
								showHoliday={showHoliday}
								showPrecipitation={showPrecipitation}
							/>}
						{attributes.tomorrowWeather &&
							<CurrentWeather
								{...TomorrowWeatherComponentProps}
								title="明日の天気"
								showHoliday={showHoliday}
								showPrecipitation={showPrecipitation}
							/>}
					</>
				)}
			</div>
			{!showSelection && attributes.weeklyWeather && <WeekWeather {...WeeklyWeatherComponentProps} />}
		</div>
	);
}
