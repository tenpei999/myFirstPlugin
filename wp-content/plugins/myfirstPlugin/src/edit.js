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
import { SelectControl } from '@wordpress/components';
import './editor.scss';
import './style.scss';
import { CurrentWeather } from './components/CurrentWeather';
import WeekWeather from './components/WeekWeather';
import UIControlGroup from './components/UICintrolGroup';
import useBlockSelection from './functions/useOutsideClick';
import { createVisibilitySettings } from './objects/visibilitySettings';
import VisibilityControl from './components/VisibilityControl';
import { useWeatherData } from './functions/useWeatherData';
import { useChangeCity } from './functions/useChangeCity';
import { cities } from './objects/getSpotWeather';
import { useFontFamilyControl } from './functions/useFontFamilyControl';
import { useChangeBalance } from './functions/useChangeBalance';

export default function Edit({ attributes, setAttributes }) {

	const defaultCityObject = {
		name: '東京',
		url: 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
	};

	const currentCityFromAttributes = attributes.selectedCity;
	const [selectedCity, setSelectedCity] = useState(currentCityFromAttributes || defaultCityObject);
	const ref = useRef(null);
	const { fontFamily, onChangeFontFamily } = useFontFamilyControl(attributes, setAttributes);
	const { todayWeather, tomorrowWeather, weeklyWeather } = useWeatherData(setAttributes);
    
	const visibilitySettings = createVisibilitySettings({ attributes, setAttributes });

	const [selectedMedia, setSelectedMedia] = useState(attributes.selectedMedia);
	const [textColor, setTextColor] = useState(attributes.textColor);
	const { showSelection, handleLayoutClick } = useBlockSelection();

	useChangeCity(selectedCity);

	const blockProps = useBlockProps({
		className: 'my-first-plugin',
	});

	const cityOptions = Object.entries(cities).map(([key, city]) => ({
		label: city.name, // 'name'属性を表示テキストとして使用
		value: key,       // キー（都市名）を内部値として使用
	}));

	const handleCityChange = (selectedCityKey) => {
		const newSelectedCity = cities[selectedCityKey];
		setSelectedCity(newSelectedCity);
		setAttributes({ selectedCity: newSelectedCity }); // ここで新しい値を保存
	};

	useEffect(() => {
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

	useEffect(() => {
		if (attributes.selectedCity) {
			setSelectedCity(attributes.selectedCity);
		}
	}, [attributes.selectedCity]);

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



	return (
		<div {...blockProps}  >
			<div onClick={handleLayoutClick} ref={ref}>
				{showSelection ? (
					<div className="checkbox-wrapper">
						<div className="detail-settings">
							<SelectControl
								label="都市を選択"
								value={selectedCity.name} // 現在選択されている都市名
								options={cityOptions}
								onChange={handleCityChange}
							/>
							<VisibilityControl settings={visibilitySettings} />
							<UIControlGroup
								fontFamily={fontFamily}
								onChangeFontFamily={onChangeFontFamily}
								textColor={textColor}
								setTextColor={setTextColor}
								selectedOption={selectedOption}
								setSelectedOption={setSelectedOption}
								fontBalanceOptions={fontBalanceOptions}
								attributes={attributes}
								setAttributes={setAttributes}
							/>
						</div>
					</div>
				) : (
					<div className="layout">
						<div className="today-and-tomorrow weather-layout">
							{attributes.showTodayWeather &&
								<CurrentWeather
									weather={attributes.todayWeather}
									title="今日の天気"
									showHoliday={attributes.showHoliday}
									showPrecipitation={attributes.showPrecipitation}
									{...commonProps}
								/>}
							{attributes.showTomorrowWeather &&
								<CurrentWeather
									weather={attributes.tomorrowWeather}
									title="明日の天気"
									showHoliday={attributes.showHoliday}
									showPrecipitation={attributes.showPrecipitation}
									{...commonProps}
								/>}
						</div>
						{attributes.showWeeklyWeather &&
							<WeekWeather
								weather={attributes.weeklyWeather}
								{...commonProps}
							/>}
					</div>
				)}
			</div>
		</div>
	);
}
