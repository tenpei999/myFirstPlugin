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
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState, useRef, useEffect } from '@wordpress/element';
import {
	CheckboxControl,
	SelectControl,
	RangeControl,
	Button,
	GradientPicker,
	ColorPalette,
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
import { useBorderControl } from './functions/useBorderControl';
import { city } from './data/getSpotWeather';
import { useFontFamilyControl } from './functions/useFontFamilyControl';
import { useChangeBalance } from './functions/useChangeBalance';

export default function Edit({ attributes, setAttributes }) {

	// 他の状態変数とともに、これらを初期化します：
	const [showHoliday, setShowHoliday] = useState(attributes.showHoliday);
	const [showPrecipitation, setShowPrecipitation] = useState(attributes.showPrecipitation);
	const [selectedCity, setSelectedCity] = useState('東京'); // 初期値として'東京'をセット
	const ref = useRef(null);
	const { cachedWeather } = useWeatherData(setAttributes);
	const [todayWeather, setTodayWeather] = useState(null);
	const [tomorrowWeather, setTomorrowWeather] = useState(null);
	const [weeklyWeather, setWeeklyWeather] = useState([]);
	const [selectedMedia, setSelectedMedia] = useState(attributes.selectedMedia);
	const [backgroundStyleType, setBackgroundStyleType] = useState('image'); // 初期値は 'image' または 'gradient'
	const [backgroundColor, setBackgroundColor] = useState(attributes.backgroundColor || '#FFFFFF');
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

	useEffect(() => {
		console.log("Attributes updated:", attributes);
	}, [attributes]);

	const {
		borders,
		onChangeBorder,
		handleRangeChange,
		handleUnitChange,
		colors,
		units,
	} = useBorderControl(attributes, setAttributes);

	const {
		fontFamily: selectedFontFamily,
		onChangeFontFamily
	} = useFontFamilyControl(attributes, setAttributes);

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

	const mediaId = 690;

	const handleSelectMedia = (media) => {
		if (media) {
			// 画像が選択されたので、背景スタイルを 'image' に設定します。
			setBackgroundStyleType('image');
			// ... [画像を設定するその他のコード]
		} else {
			// 画像が削除されたので、背景スタイルをリセットします。
			setBackgroundStyleType(null);
			// ... [その他のリセットコード]
		}
	};

	const handleGradientChange = (newGradient) => {
		if (newGradient) {
			// グラデーションが選択されたので、背景スタイルを 'gradient' に設定します。
			setBackgroundStyleType('gradient');
			// ... [グラデーションを設定するその他のコード]
		} else {
			// グラデーションが削除されたので、背景スタイルをリセットします。
			setBackgroundStyleType(null);
			// ... [その他のリセットコード]
		}
	};

	const commonProps = {
    borderRadius: attributes.borderRadiusValue,
    borders: attributes.borders,
    fontFamily: attributes.fontFamily,
    color: textColor, 
    styleVariant: selectedOption.value, 
    backgroundStyleType: backgroundStyleType,
    selectedMedia: selectedMedia,
    backgroundGradient: attributes.backgroundGradient,
    backgroundColor: backgroundColor,
  };

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
								onChange={onChangeBorder}
								value={attributes.borders}
							/>
							<div>
								<RangeControl
									label="Set your value"
									value={parseInt(attributes.borderRadiusValue, 10)}
									onChange={handleRangeChange}
									min={0}
									max={(attributes.borderRadiusValue && attributes.borderRadiusValue.includes('px')) ? 100 : 100}
								/>
								<SelectControl
									label="Select unit"
									value={attributes.borderRadiusValue && attributes.borderRadiusValue.replace(/[0-9]/g, '')}
									options={units}
									onChange={handleUnitChange}
								/>
							</div>
							<SelectControl
								label="フォントファミリーを選択"
								value={attributes.fontFamily || selectedFontFamily}
								options={[
									{ label: 'Noto Sans JP', value: "NotoSans, sans-serif" },
									{ label: 'Noto Serif JP', value: "NotoSerif, serif" },
									{ label: 'M PLUS 1p', value: "MPLUS1, sans-serif" },
									{ label: 'Kosugi Maru', value: "KosugiMaru, sans-serif" },
									{ label: 'Sawarabi Gothic', value: "SawarabiGothic, sans-serif" }
								]}
								onChange={newFontFamily => {
									setAttributes({ fontFamily: newFontFamily });
									onChangeFontFamily(newFontFamily);
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
							<SelectControl
								label="背景スタイル"
								value={backgroundStyleType}
								options={[
									{ label: '画像', value: 'image' },
									{ label: 'カラー', value: 'color' },
									{ label: 'グラデーション', value: 'gradient' },
								]}
								onChange={(value) => setBackgroundStyleType(value)}
							/>
							{backgroundStyleType === 'image' && (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => {
											if (media) {
												const selectedMediaUrl = media.url; // 選択したメディアのURLを取得
												setAttributes({
													backgroundImage: selectedMediaUrl,
													selectedMedia: selectedMediaUrl, // selectedMedia属性に設定
												});
											} else {
												setAttributes({
													backgroundImage: null,
													selectedMedia: null, // selectedMedia属性をクリア
												});
											}
										}}
										allowedTypes={['image']}
										value={attributes.backgroundImage || mediaId}
										render={({ open }) => (
											<Button onClick={open}>Open Media Library</Button>
										)}
									/>
								</MediaUploadCheck>
							)}

							{backgroundStyleType === 'color' && (
								<ColorPalette
									onChange={(color) => {
										setBackgroundColor(color); // 新しい色で状態を更新
										setAttributes({ backgroundColor: color }); // ブロックの属性も更新
									}}
									value={backgroundColor}
								/>
							)}

							{backgroundStyleType === 'gradient' && (
								<GradientPicker
									__nextHasNoMargin
									value={attributes.backgroundGradient}
									onChange={(newGradient) => setAttributes({ backgroundGradient: newGradient })}
									gradients={[
										{
											name: 'JShine',
											gradient:
												'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
											slug: 'jshine',
										},
										{
											name: 'Moonlit Asteroid',
											gradient:
												'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
											slug: 'moonlit-asteroid',
										},
										{
											name: 'Rastafarie',
											gradient:
												'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
											slug: 'rastafari',
										},
									]}
								/>
							)}
							<SelectControl
								label="テキストの色を選択"
								value={textColor}
								options={[
									{ label: '黒', value: 'black' },
									{ label: '白', value: 'white' },
								]}
								onChange={(value) => {
									setTextColor(value); // ローカルステートを更新
									setAttributes({ textColor: value }); // ブロックの属性を更新
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
						{!showSelection && weeklyWeather && <WeekWeather
							{...WeeklyWeatherComponentProps}
							{...commonProps}
						/>}
					</div>
				)}
			</div>
		</div>
	);
}
