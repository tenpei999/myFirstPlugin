/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState, useRef, useEffect } from '@wordpress/element';
import {
	CheckboxControl,
	SelectControl,
	RangeControl,
	__experimentalBorderBoxControl as BorderBoxControl,
}
	from '@wordpress/components';
import './editor.scss';
import './style.scss';
import { CurrentWeather } from './components/CurrentWeather';
import WeekWeather from './components/WeekWeather';
import useBlockSelection from './functions/useOutsideClick';
import { useWeatherData } from './functions/useWeatherData';
import { useChangeCity } from './functions/useChangeCity';
import { city } from './data/getSpotWeather';

export default function Edit({ attributes, setAttributes }) {

	// 他の状態変数とともに、これらを初期化します：
	const [showHoliday, setShowHoliday] = useState(attributes.showHoliday);
	const [showPrecipitation, setShowPrecipitation] = useState(attributes.showPrecipitation);
	const [selectedCity, setSelectedCity] = useState('東京'); // 初期値として'東京'をセット
	const ref = useRef(null);
	const cachedWeather = useWeatherData(setAttributes);

	const [todayWeather, setTodayWeather] = useState(null);
	const [tomorrowWeather, setTomorrowWeather] = useState(null);
	const [weeklyWeather, setWeeklyWeather] = useState([]);
	const { showSelection, handleLayoutClick } = useBlockSelection();

	useChangeCity(selectedCity, setTodayWeather, setTomorrowWeather, setWeeklyWeather);


	const TodayWeatherComponentProps = {
		weather: todayWeather, // attributes.todayWeather の代わり
	};

	const TomorrowWeatherComponentProps = {
		weather: tomorrowWeather, // attributes.tomorrowWeather の代わり
	};

	const WeeklyWeatherComponentProps = {
		weather: weeklyWeather, // attributes.weeklyWeather の代わり
	};

	const blockProps = useBlockProps({
		className: 'my-first-plugin'
	});

	// `city`オブジェクトから都市名を抽出してSelectControlに適切な形式で変換
	const cityOptions = Object.keys(city).map(cityName => ({
		label: cityName.charAt(0).toUpperCase() + cityName.slice(1), // 都市名の最初の文字を大文字に
		value: cityName
	}));

	//attributesの変更を監視するuseEffect：
	useEffect(() => {
		console.log("Attributes updated:", attributes);
	}, [attributes]);

	const colors = [
		{ name: 'Blue 20', color: '#72aee6' },
		// ...
	];
	const defaultBorder = {
		color: '#72aee6',
		style: 'dashed',
		width: '1px',
	};
	const [borders, setBorders] = useState(attributes.borders || {
		top: defaultBorder,
		right: defaultBorder,
		bottom: defaultBorder,
		left: defaultBorder,
	});
	const onChange = (newBorders) => {
		console.log('New borders from BorderBoxControl:', newBorders);

		const updatedBorders = {
			top: {
				...borders.top,
				...newBorders,
				width: newBorders.width || '0px',
				color: newBorders.color || '#72AEE6',
				style: newBorders.style || 'dashed'
			},
			right: {
				...borders.right,
				...newBorders,
				width: newBorders.width || '0px',
				color: newBorders.color || '#72AEE6',
				style: newBorders.style || 'dashed'
			},
			bottom: {
				...borders.bottom,
				...newBorders,
				width: newBorders.width || '0px',
				color: newBorders.color || '#72AEE6',
				style: newBorders.style || 'dashed'
			},
			left: {
				...borders.left,
				...newBorders,
				width: newBorders.width || '0px',
				color: newBorders.color || '#72AEE6',
				style: newBorders.style || 'dashed'
			}
		};

		setAttributes({ ...attributes, borders: updatedBorders });
		setBorders(updatedBorders);
	};

	useEffect(() => {
		if (attributes.borders) {
			setBorders(attributes.borders);
		}
	}, [attributes.borders]);

	console.log(borders)

	const units = [
		{ label: 'Pixels (px)', value: 'px' },
		{ label: 'Percentage (%)', value: '%' },
	];
	const handleRangeChange = (newValue) => {
		const currentUnit = attributes.rangeValue?.replace(/[0-9]/g, '') || 'px';
		if (!isNaN(newValue)) {
			setAttributes({ ...attributes, rangeValue: `${newValue}${currentUnit}` });
		}
	};

	const handleUnitChange = (newUnit) => {
		const currentValue = parseInt(attributes.rangeValue || '0', 10);
		setAttributes({ ...attributes, rangeValue: `${currentValue}${newUnit}` });
	};



	return (
		<div {...blockProps} >
			<div onClick={handleLayoutClick} ref={ref}>
				{showSelection ? (
					<div className="checkbox-wrapper">
						<div className="detail-settings">
							<SelectControl
								label="都市を選択"
								value={selectedCity}
								options={cityOptions}
								onChange={(value) => setSelectedCity(value)}
							/>
							<CheckboxControl
								label="今日の天気を表示"
								checked={attributes.todayWeather !== null}
								// onChange={(checked) => setAttributes({ todayWeather: checked ? cachedWeather.today : null })}
								onChange={(checked) => {
									if (checked) {
										setAttributes({ todayWeather: cachedWeather.today });
										setTodayWeather(cachedWeather.today);
									} else {
										setAttributes({ todayWeather: null });
										setTodayWeather(null);
									}
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
							<BorderBoxControl
								colors={colors}
								label={__('Borders')}
								onChange={onChange}
								value={attributes.borders}
							/>
							<div>
								<RangeControl
									label="Set your value"
									value={parseInt(attributes.rangeValue, 10)} // ここを変更
									onChange={handleRangeChange}
									min={0}
									max={(attributes.rangeValue && attributes.rangeValue.includes('px')) ? 1000 : 100} // ここを変更
								/>
								<SelectControl
									label="Select unit"
									value={attributes.rangeValue && attributes.rangeValue.replace(/[0-9]/g, '')} // ここを変更
									options={units}
									onChange={handleUnitChange}
								/>
							</div>
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
									borderWidth={attributes.borderWidthValue}
									borders={attributes.borders}
								/>}
							{attributes.tomorrowWeather &&
								<CurrentWeather
									{...TomorrowWeatherComponentProps}
									title="明日の天気"
									showHoliday={attributes.showHoliday}
									showPrecipitation={attributes.showPrecipitation}
									borderWidth={attributes.borderWidthValue}
									borders={attributes.borders}
								/>}
						</div>
						{!showSelection && weeklyWeather && <WeekWeather
							{...WeeklyWeatherComponentProps}
							borderWidth={attributes.borderWidthValue}
							borders={attributes.borders}
						/>}
					</div>
				)}
			</div>
		</div>
	);
}
