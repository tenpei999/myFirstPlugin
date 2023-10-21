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
	SelectControl,
}
	from '@wordpress/components';
import './editor.scss';
import './style.scss';
import { CurrentWeather } from './components/CurrentWeather';
import WeekWeather from './components/WeekWeather';
import useBlockSelection from './functions/useOutsideClick';
import VisibilityControl from './components/VisibilityControl';
import FontFamilyControl from './components/FontFamilyControl';
import TextColorControl from './components/TextColorControl';
import BackgroundSelector from './components/BackgroundSelector';
import BorderControlGroup from './components/BorderControlGroup';
import { createVisibilitySettings } from './objects/visibilitySettings';
import { useWeatherData } from './functions/useWeatherData';
import { useChangeCity } from './functions/useChangeCity';
import { city } from './data/getSpotWeather';
import { useFontFamilyControl } from './functions/useFontFamilyControl';
import { useChangeBalance } from './functions/useChangeBalance';

export default function Edit({ attributes, setAttributes }) {

	// 他の状態変数とともに、これらを初期化します：
	// const [showHoliday, setShowHoliday] = useState(attributes.showHoliday);
	// const [showPrecipitation, setShowPrecipitation] = useState(attributes.showPrecipitation);
	const [selectedCity, setSelectedCity] = useState('東京'); // 初期値として'東京'をセット
	const ref = useRef(null);
	const { fontFamily, onChangeFontFamily } = useFontFamilyControl(attributes, setAttributes);
	// const cachedWeather = useWeatherData(setAttributes);
	const [todayWeather, setTodayWeather] = useState(null);
	const [tomorrowWeather, setTomorrowWeather] = useState(null);
	const [weeklyWeather, setWeeklyWeather] = useState([]);
	const [selectedMedia, setSelectedMedia] = useState(attributes.selectedMedia);

	const [textColor, setTextColor] = useState(attributes.textColor);

	const { showSelection, handleLayoutClick } = useBlockSelection();

	useChangeCity(selectedCity, setTodayWeather, setTomorrowWeather, setWeeklyWeather);

	const TodayWeatherComponentProps = {
		weather: todayWeather,
	};

	const TomorrowWeatherComponentProps = {
		weather: tomorrowWeather,
	};

	const WeeklyWeatherComponentProps = {
		weather: weeklyWeather,
	};

	const blockProps = useBlockProps({
		className: 'my-first-plugin',
	});

	// `city`オブジェクトから都市名を抽出してSelectControlに適切な形式で変換
	const cityOptions = Object.keys(city).map(cityName => ({
		label: cityName.charAt(0).toUpperCase() + cityName.slice(1), // 都市名の最初の文字を大文字に
		value: cityName
	}));

	const visibilitySettings = createVisibilitySettings({
		attributes,
		setAttributes,
		setTodayWeather, 
});

	useEffect(() => {
		console.log("Attributes updated:", attributes);
	}, [attributes]);

	const {
		selectedOption,
		setSelectedOption,
		fontBalanceOptions,
		applyFontBalance
	} = useChangeBalance(attributes.balanceOption, setAttributes);

	useEffect(() => {
		// selectedMediaが変更されたときに実行されるコード
		if (selectedMedia !== attributes.selectedMedia) {
			setSelectedMedia(attributes.selectedMedia);
		}
	}, [attributes.selectedMedia]);

	const commonProps = {
		borderRadius: attributes.borderRadiusValue,
		borders: attributes.borders,
		fontFamily: attributes.fontFamily,
		color: textColor,
		styleVariant: selectedOption.value,
		backgroundStyleType: attributes.backgroundStyleType,
		selectedMedia: selectedMedia,
		backgroundGradient: attributes.backgroundGradient,
		backgroundColor: attributes.backgroundColor,
	};

	console.log(attributes)

	return (
		<div {...blockProps}  >
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
							<VisibilityControl settings={visibilitySettings} />
							<BorderControlGroup
								attributes={attributes}
								setAttributes={setAttributes}
							/>
							<FontFamilyControl
								fontFamily={fontFamily || attributes.fontFamily}
								setFontFamily={onChangeFontFamily}
							/>
							<TextColorControl
								textColor={textColor}
								setTextColor={(value) => {
									setTextColor(value);
									setAttributes({ textColor: value });
								}}
							/>
							<SelectControl
								label="Font Balance"
								value={selectedOption.label}
								options={fontBalanceOptions.map(opt => ({ label: opt.label, value: opt.label }))}
								onChange={(label) => {
									const option = fontBalanceOptions.find(opt => opt.label === label);
									setSelectedOption(option);
								}}
							/>
							<BackgroundSelector
								attributes={attributes}
								setAttributes={setAttributes}
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
									{...commonProps}
								/>}
							{attributes.tomorrowWeather &&
								<CurrentWeather
									{...TomorrowWeatherComponentProps}
									title="明日の天気"
									showHoliday={attributes.showHoliday}
									showPrecipitation={attributes.showPrecipitation}
									{...commonProps}
								/>}
						</div>
						{!showSelection && attributes.weeklyWeather && <WeekWeather
							{...WeeklyWeatherComponentProps}
							{...commonProps}
						/>}
					</div>
				)}
			</div>
		</div>
	);
}
