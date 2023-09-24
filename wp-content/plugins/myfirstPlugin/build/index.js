/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CurrentWeather.js":
/*!******************************************!*\
  !*** ./src/components/CurrentWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentWeather: () => (/* binding */ CurrentWeather)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Temp */ "./src/components/Temp.js");
/* harmony import */ var _TimeZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeZone */ "./src/components/TimeZone.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.scss */ "./src/style.scss");




const CurrentWeather = ({
  weather,
  title,
  showPrecipitation,
  showHoliday
}) => {
  if (!weather || !weather.day) return null; // weather と weather.day の存在を確認

  const isHoliday = weather.day.isHoliday;
  let textColor;
  if (isHoliday || weather.day.isSunday) {
    textColor = "red";
  } else if (weather.day.isSaturday) {
    textColor = "blue";
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    className: "block--current"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      color: textColor
    }
  }, weather.day.date), showHoliday && weather.day.isHoliday && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.day.holidayName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: weather.image,
    alt: "weather icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Temp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    weather: weather
  }), showPrecipitation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TimeZone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    weather: weather
  }));
};


/***/ }),

/***/ "./src/components/Temp.js":
/*!********************************!*\
  !*** ./src/components/Temp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Temp = ({
  weather
}) => {
  if (!weather) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "temp"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.highestTemperature, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "celsius"
  }, "\u2103")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.maximumTemperatureComparison)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.lowestTemperature, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "celsius"
  }, "\u2103")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.lowestTemperatureComparison)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Temp);

/***/ }),

/***/ "./src/components/TimeZone.js":
/*!************************************!*\
  !*** ./src/components/TimeZone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const TimeZone = ({
  weather
}) => {
  if (!weather) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "time-zone"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "c-weather__chanceOfRain-index"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "time"
  }, "\u6642\u9593"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "rain"
  }, "\u964D\u6C34")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "c-weather__chanceOfRain-timezone1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "time"
  }, "0\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain1",
    className: "rain"
  }, weather.rainProbability[0].precipitation_probability, "%")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "c-weather__chanceOfRain-timezone2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "time"
  }, "6\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain2",
    className: "rain"
  }, weather.rainProbability[1].precipitation_probability, "%")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "c-weather__chanceOfRain-timezone3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "time"
  }, "12\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain3",
    className: "rain"
  }, weather.rainProbability[2].precipitation_probability, "%")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "c-weather__chanceOfRain-timezone4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "time"
  }, "18\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain4",
    className: "rain"
  }, weather.rainProbability[3].precipitation_probability, "%")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeZone);

/***/ }),

/***/ "./src/components/WeekWeather.js":
/*!***************************************!*\
  !*** ./src/components/WeekWeather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Temp */ "./src/components/Temp.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.scss */ "./src/style.scss");




const WeekWeather = ({
  weather
}) => {
  if (!weather) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "block--weekly weather-layout"
  }, weather.slice(0, 6).map(dayWeather => {
    if (!dayWeather || !dayWeather.day) return null;
    let textColor;
    if (dayWeather.day.isHoliday || dayWeather.day.isSunday) {
      textColor = "red";
    } else if (dayWeather.day.isSaturday) {
      textColor = "blue";
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "block--day",
      key: dayWeather.day.date
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "c-title__weather",
      style: {
        color: textColor
      }
    }, dayWeather.day.date), dayWeather.day.isHoliday && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, dayWeather.day.holidayName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "c-weather__weather"
    }, dayWeather.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "c-weather__img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: dayWeather.image,
      alt: "Weather Icon"
    })), dayWeather.highestTemperature && dayWeather.lowestTemperature && dayWeather.maximumTemperatureComparison && dayWeather.lowestTemperatureComparison && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Temp__WEBPACK_IMPORTED_MODULE_1__["default"], {
      weather: dayWeather
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeekWeather);

/***/ }),

/***/ "./src/data/getSpotWeather.js":
/*!************************************!*\
  !*** ./src/data/getSpotWeather.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   city: () => (/* binding */ city)
/* harmony export */ });
const city = {
  // https://open-meteo.com/en/docs
  // Daily Weather Variables Weathercode / Maximum Temperature (2 m) / Minimum Temperature (2 m) / Past days 1

  札幌: 'https://api.open-meteo.com/v1/forecast?latitude=43.0667&longitude=141.35&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  秋田: 'https://api.open-meteo.com/v1/forecast?latitude=39.7167&longitude=140.1167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  金沢: 'https://api.open-meteo.com/v1/forecast?latitude=36.6&longitude=136.6167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  東京: 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  大宮: 'https://api.open-meteo.com/v1/forecast?latitude=35.9635&longitude=139.8305&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  名古屋: 'https://api.open-meteo.com/v1/forecast?latitude=35.1815&longitude=136.9064&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  南堀江: 'https://api.open-meteo.com/v1/forecast?latitude=34.6711&longitude=135.4942&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  八尾: 'https://api.open-meteo.com/v1/forecast?latitude=34.6167&longitude=135.6&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  奈良: 'https://api.open-meteo.com/v1/forecast?latitude=34.685&longitude=135.8049&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  朝来: 'https://api.open-meteo.com/v1/forecast?latitude=35.2591&longitude=134.8139&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  福岡: 'https://api.open-meteo.com/v1/forecast?latitude=33.6&longitude=130.4167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  佐世保: 'https://api.open-meteo.com/v1/forecast?latitude=33.1683&longitude=129.725&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  諸塚: 'https://api.open-meteo.com/v1/forecast?latitude=32.5601&longitude=131.3198&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  パリ: 'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
};

/***/ }),

/***/ "./src/data/getWeatherInfo.js":
/*!************************************!*\
  !*** ./src/data/getWeatherInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
* WMOのweatherCodeに対応する、天候名とアイコンを返す
*
* アイコンは気象庁の利用規約に基づいて使用させて頂いております。
* 出典: 気象庁「https://www.jma.go.jp/bosai/forecast/img/100.svg」,
      気象庁「https://www.jma.go.jp/bosai/forecast/img/101.svg」,
      気象庁「https://www.jma.go.jp/bosai/forecast/img/200.svg」,
      気象庁「https://www.jma.go.jp/bosai/forecast/img/202.svg」,
      気象庁「https://www.jma.go.jp/bosai/forecast/img/300.svg」,
      気象庁「https://www.jma.go.jp/bosai/forecast/img/302.svg」,
      気象庁「https://www.jma.go.jp/bosai/forecast/img/400.svg」
* @link https://www.jma.go.jp/jma/kishou/info/coment.html
*
* @param {number} weatherCode WMOに基づくweatherCode
* @returns {Object<label<String>, icon<String>>} weatherコードに対応するラベルとアイコンを格納したオブジェクト
*/

const getWeatherInfo = weatherCode => {
  const pluginImagePaths = myPluginData.pluginImagePath;

  // 0 : Clear Sky
  if (weatherCode === 0) {
    return {
      label: "快晴",
      icon: pluginImagePaths + '100.svg'
    };
  }
  if (weatherCode === 1) {
    return {
      label: "晴れ",
      icon: pluginImagePaths + '100.svg'
    };
  }
  // 2 : Partly Cloudy
  if (weatherCode === 2) {
    return {
      label: "一部曇",
      icon: pluginImagePaths + '101.svg'
    };
  }
  // 3 : Overcast
  if (weatherCode === 3) {
    return {
      label: "曇り",
      icon: pluginImagePaths + '200.svg'
    };
  }
  // 45, 48 : Fog And Depositing Rime Fog
  if (weatherCode <= 49) {
    return {
      label: "霧",
      icon: pluginImagePaths + '200.svg'
    };
  }
  // 51, 53, 55 : Drizzle Light, Moderate And Dense Intensity ・ 56, 57 : Freezing Drizzle Light And Dense Intensity
  if (weatherCode <= 59) {
    return {
      label: "霧雨",
      icon: pluginImagePaths + '202.svg'
    };
  }
  // 61, 63, 65 : Rain Slight, Moderate And Heavy Intensity ・66, 67 : Freezing Rain Light And Heavy Intensity
  if (weatherCode <= 69) {
    return {
      label: "雨",
      icon: pluginImagePaths + '300.svg'
    };
  }
  // 71, 73, 75 : Snow Fall Slight, Moderate And Heavy Intensity ・ 77 : Snow Grains
  if (weatherCode <= 79) {
    return {
      label: "雪",
      icon: pluginImagePaths + '400.svg'
    };
  }
  // 80, 81, 82 : Rain Showers Slight, Moderate And Violent
  if (weatherCode <= 84) {
    return {
      label: "俄か雨",
      icon: pluginImagePaths + '302.svg'
    };
  }
  // 85, 86 : Snow Showers Slight And Heavy
  if (weatherCode <= 94) {
    return {
      label: "雪・雹",
      icon: pluginImagePaths + '400.svg'
    };
  }
  // 95 : Thunderstorm Slight Or Moderate ・ 96, 99 : Thunderstorm With Slight And Heavy Hail
  if (weatherCode <= 99) {
    return {
      label: "雷雨",
      icon: pluginImagePaths + '300.svg'
    };
  }
  // その他はエラーとする
  return {
    label: "ERROR",
    icon: ""
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherInfo);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_CurrentWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CurrentWeather */ "./src/components/CurrentWeather.js");
/* harmony import */ var _components_WeekWeather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/WeekWeather */ "./src/components/WeekWeather.js");
/* harmony import */ var _functions_useOutsideClick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/useOutsideClick */ "./src/functions/useOutsideClick.js");
/* harmony import */ var _functions_useWeatherData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/useWeatherData */ "./src/functions/useWeatherData.js");
/* harmony import */ var _functions_useChangeCity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/useChangeCity */ "./src/functions/useChangeCity.js");
/* harmony import */ var _data_getSpotWeather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/getSpotWeather */ "./src/data/getSpotWeather.js");

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












function Edit({
  attributes,
  setAttributes
}) {
  // 他の状態変数とともに、これらを初期化します：
  const [showHoliday, setShowHoliday] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.showHoliday);
  const [showPrecipitation, setShowPrecipitation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.showPrecipitation);
  const [selectedCity, setSelectedCity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('東京'); // 初期値として'東京'をセット
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cachedWeather = (0,_functions_useWeatherData__WEBPACK_IMPORTED_MODULE_9__.useWeatherData)(setAttributes);
  const [todayWeather, setTodayWeather] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [tomorrowWeather, setTomorrowWeather] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [weeklyWeather, setWeeklyWeather] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    showSelection,
    handleLayoutClick
  } = (0,_functions_useOutsideClick__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_functions_useChangeCity__WEBPACK_IMPORTED_MODULE_10__.useChangeCity)(selectedCity, setTodayWeather, setTomorrowWeather, setWeeklyWeather);
  const TodayWeatherComponentProps = {
    weather: todayWeather // attributes.todayWeather の代わり
  };

  const TomorrowWeatherComponentProps = {
    weather: tomorrowWeather // attributes.tomorrowWeather の代わり
  };

  const WeeklyWeatherComponentProps = {
    weather: weeklyWeather // attributes.weeklyWeather の代わり
  };

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'my-first-plugin'
  });

  // `city`オブジェクトから都市名を抽出してSelectControlに適切な形式で変換
  const cityOptions = Object.keys(_data_getSpotWeather__WEBPACK_IMPORTED_MODULE_11__.city).map(cityName => ({
    label: cityName.charAt(0).toUpperCase() + cityName.slice(1),
    // 都市名の最初の文字を大文字に
    value: cityName
  }));

  //attributesの変更を監視するuseEffect：
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("Attributes updated:", attributes);
  }, [attributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: handleLayoutClick,
    ref: ref
  }, showSelection ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "checkbox-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "detail-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "\u90FD\u5E02\u3092\u9078\u629E",
    value: selectedCity,
    options: cityOptions,
    onChange: value => setSelectedCity(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "\u4ECA\u65E5\u306E\u5929\u6C17\u3092\u8868\u793A",
    checked: attributes.todayWeather !== null
    // onChange={(checked) => setAttributes({ todayWeather: checked ? cachedWeather.today : null })}
    ,
    onChange: checked => {
      if (checked) {
        setAttributes({
          todayWeather: cachedWeather.today
        });
        setTodayWeather(cachedWeather.today);
      } else {
        setAttributes({
          todayWeather: null
        });
        setTodayWeather(null);
      }
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "\u660E\u65E5\u306E\u5929\u6C17\u3092\u8868\u793A",
    checked: attributes.tomorrowWeather !== null,
    onChange: checked => setAttributes({
      tomorrowWeather: checked ? cachedWeather.tomorrow : null
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "\u9031\u9593\u306E\u5929\u6C17\u3092\u8868\u793A",
    checked: attributes.weeklyWeather !== null,
    onChange: checked => setAttributes({
      weeklyWeather: checked ? cachedWeather.weekly : null
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "\u8A73\u7D30\u8A2D\u5B9A"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "\u795D\u65E5\u3092\u8868\u793A",
    checked: showHoliday,
    onChange: checked => {
      setShowHoliday(checked);
      setAttributes({
        showHoliday: checked
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "\u964D\u6C34\u78BA\u7387\u3092\u8868\u793A",
    checked: showPrecipitation,
    onChange: checked => {
      setShowPrecipitation(checked);
      setAttributes({
        showPrecipitation: checked
      });
    }
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "today-and-tomorrow weather-layout"
  }, attributes.todayWeather && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CurrentWeather__WEBPACK_IMPORTED_MODULE_6__.CurrentWeather, {
    ...TodayWeatherComponentProps,
    title: "\u4ECA\u65E5\u306E\u5929\u6C17",
    showHoliday: attributes.showHoliday,
    showPrecipitation: attributes.showPrecipitation
  }), attributes.tomorrowWeather && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CurrentWeather__WEBPACK_IMPORTED_MODULE_6__.CurrentWeather, {
    ...TomorrowWeatherComponentProps,
    title: "\u660E\u65E5\u306E\u5929\u6C17",
    showHoliday: attributes.showHoliday,
    showPrecipitation: attributes.showPrecipitation
  })), !showSelection && weeklyWeather && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_WeekWeather__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ...WeeklyWeatherComponentProps
  }))));
}

/***/ }),

/***/ "./src/functions/useChangeCity.js":
/*!****************************************!*\
  !*** ./src/functions/useChangeCity.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useChangeCity: () => (/* binding */ useChangeCity)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objects_weatherObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/weatherObject */ "./src/objects/weatherObject.js");
/* harmony import */ var _data_getSpotWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/getSpotWeather */ "./src/data/getSpotWeather.js");



function useChangeCity(selectedCity, setTodayWeather, setTomorrowWeather, setWeeklyWeather) {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchData() {
      const cityurl = _data_getSpotWeather__WEBPACK_IMPORTED_MODULE_2__.city[selectedCity];
      if (cityurl) {
        await (0,_objects_weatherObject__WEBPACK_IMPORTED_MODULE_1__["default"])(cityurl, setTodayWeather, setTomorrowWeather, setWeeklyWeather);
      } else {
        console.error(`No URL found for city: ${selectedCity}`);
      }
      console.log(cityurl);
    }
    fetchData();
  }, [selectedCity]);
}

/***/ }),

/***/ "./src/functions/useOutsideClick.js":
/*!******************************************!*\
  !*** ./src/functions/useOutsideClick.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


function useBlockSelection() {
  const [showSelection, setShowSelection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let previouslySelectedBlockId = null;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const unsubscribe = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.subscribe)(() => {
      const selectedBlockId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/block-editor').getSelectedBlockClientId();

      // 新しくブロックが選択された場合
      if (selectedBlockId && previouslySelectedBlockId !== selectedBlockId) {
        setShowSelection(true);
      }

      // ブロックの選択が解除された場合
      if (!selectedBlockId && previouslySelectedBlockId) {
        setShowSelection(false);
      }
      previouslySelectedBlockId = selectedBlockId;
    });

    // コンポーネントのクリーンアップ時に購読を解除する
    return () => unsubscribe();
  }, []);
  const handleLayoutClick = e => {
    e.stopPropagation();
    if (!showSelection) {
      setShowSelection(true);
    }
  };
  return {
    showSelection,
    handleLayoutClick
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBlockSelection);

/***/ }),

/***/ "./src/functions/useWeatherData.js":
/*!*****************************************!*\
  !*** ./src/functions/useWeatherData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWeatherData: () => (/* binding */ useWeatherData)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objects_weatherObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/weatherObject */ "./src/objects/weatherObject.js");


const useWeatherData = setAttributes => {
  const [cachedWeather, setCachedWeather] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    today: null,
    tomorrow: null,
    weekly: null
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const cityurl = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14';
    (0,_objects_weatherObject__WEBPACK_IMPORTED_MODULE_1__["default"])(cityurl, todayData => {
      setCachedWeather(prev => ({
        ...prev,
        today: todayData
      }));
      setAttributes({
        todayWeather: todayData,
        showHoliday: todayData.day.isHoliday,
        showPrecipitation: todayData.rainProbability
      });
    }, tomorrowData => {
      setCachedWeather(prev => ({
        ...prev,
        tomorrow: tomorrowData
      }));
      setAttributes({
        tomorrowWeather: tomorrowData,
        showHoliday: tomorrowData.day.isHoliday,
        showPrecipitation: tomorrowData.rainProbability
      });
    }, weeklyData => {
      const weeklyHolidays = weeklyData.map(data => data.day);
      setCachedWeather(prev => ({
        ...prev,
        weekly: weeklyData
      }));
      setAttributes({
        weeklyWeather: weeklyData,
        showHoliday: weeklyHolidays
      });
    });
  }, [setAttributes]);
  return cachedWeather;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */


// import save from './save';


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * Used to construct a preview for the block to be shown in the block inserter.
   */
  example: {
    attributes: {
      message: 'my-first-plugin',
      todayWeather: {
        type: 'object',
        default: {}
      },
      tomorrowWeather: {
        type: 'object',
        default: {}
      },
      weeklyWeather: {
        type: 'array',
        default: []
      }
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save() {
    return null;
  }
});

/***/ }),

/***/ "./src/objects/dayWithHoloday.js":
/*!***************************************!*\
  !*** ./src/objects/dayWithHoloday.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dayWithHoliday = async () => {
  async function getHolidays() {
    const response = await fetch('https://holidays-jp.github.io/api/v1/date.json');
    const holidays = await response.json();
    return holidays;
  }
  function getDateRangeArray(startDate, endDate) {
    const dateArray = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }
  async function getOneWeekDatesWithHolidays() {
    const today = new Date();
    const sixDaysLater = new Date(today);
    sixDaysLater.setDate(today.getDate() + 6);
    const oneWeekDates = getDateRangeArray(today, sixDaysLater);

    // Get the holidays
    const holidays = await getHolidays();

    // Create an array of dates with holidays data included
    const oneWeekDatesWithHolidays = oneWeekDates.map(date => {
      const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
      const dayOfWeek = weekDays[date.getDay()];
      const formattedDate = `${String(date.getMonth() + 1)}月${String(date.getDate())}日(${dayOfWeek})`;
      return {
        date: formattedDate,
        isHoliday: !!holidays[formattedDate],
        // this will be true if the date is a holiday, otherwise false
        holidayName: holidays[formattedDate] || null,
        // this will have the holiday name if the date is a holiday, otherwise null
        isSaturday: date.getDay() === 6,
        isSunday: date.getDay() === 0
      };
    });
    return oneWeekDatesWithHolidays;
  }
  return await getOneWeekDatesWithHolidays();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayWithHoliday);

/***/ }),

/***/ "./src/objects/weatherObject.js":
/*!**************************************!*\
  !*** ./src/objects/weatherObject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/getWeatherInfo */ "./src/data/getWeatherInfo.js");
/* harmony import */ var _dayWithHoloday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dayWithHoloday */ "./src/objects/dayWithHoloday.js");


const weatherObject = async (cityurl, setTodayWeather, setTomorrowWeather, setWeeklyWeather) => {
  try {
    if (!cityurl) {
      throw new Error(`City "${cityurl}" does not exist in the city object.`);
    }
    console.log(cityurl);
    if (!cityurl) {
      throw new Error(`URL not found for city "${cityurl}".`);
    }
    const apiUrl = myPluginData.siteUrl + '/wp-json/my-weather-plugin/save-data/';
    const response = await fetch(cityurl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for city: ${cityurl}. Status: ${response.status}`);
    }
    const data2 = await response.json();
    console.log(data2);
    if (!data2 || !data2.daily) {
      throw new Error("Unexpected data format received from the weather API.");
    }
    const datesForWeek = await (0,_dayWithHoloday__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (!datesForWeek || datesForWeek.length !== 7) {
      throw new Error("Unexpected date array length from dayWithHoliday.");
    }
    const weatherCodesForWeek = data2.daily.weathercode; // 本日から6日後までの天気コード

    // 天気コードを天気名に変換
    const weatherNamesForWeek = weatherCodesForWeek.map(code => (0,_data_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(code).label);
    const weatherImageForWeek = weatherCodesForWeek.map(code => (0,_data_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(code).icon);
    const highestTemperatureForWeek = data2.daily.temperature_2m_max; // 昨日から6日後までの天気コード
    const lowestTemperatureForWeek = data2.daily.temperature_2m_min; // 昨日から6日後までの天気コード
    const highestTemperatureDifferencesForWeek = [];
    for (let i = -1; i < highestTemperatureForWeek.length; i++) {
      const todayMaxTemperature = highestTemperatureForWeek[i + 1];
      const yesterdayMaxTemperature = highestTemperatureForWeek[i];
      const temperatureDifference = Math.ceil((todayMaxTemperature - yesterdayMaxTemperature) * 10) / 10;
      const formattedDifference = temperatureDifference >= 0 ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;
      highestTemperatureDifferencesForWeek.push(formattedDifference);
    }
    const lowestTemperatureDifferencesForWeek = [];
    for (let i = -1; i < lowestTemperatureForWeek.length; i++) {
      const todayMinTemperature = lowestTemperatureForWeek[i + 1];
      const yesterdayMinTemperature = lowestTemperatureForWeek[i];
      const temperatureDifference = Math.ceil((todayMinTemperature - yesterdayMinTemperature) * 10) / 10;
      const formattedDifference = temperatureDifference >= 0 ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;
      lowestTemperatureDifferencesForWeek.push(formattedDifference);
    }
    console.log(lowestTemperatureDifferencesForWeek);
    console.log('もみじ饅頭');
    console.log(data2);
    const rainProbability1 = {};
    for (let i = 1; i <= 7; i++) {
      let baseTime = i === 0 ? 0 : 24 * i;
      rainProbability1[i] = [];
      for (let j = 0; j < 4; j++) {
        rainProbability1[i].push({
          time: data2.hourly.time[baseTime + j * 6],
          precipitation_probability: data2.hourly.precipitation_probability[baseTime + j * 6]
        });
      }
      console.log(rainProbability1);
    }
    const dailyData = weatherNamesForWeek.map((name, index) => ({
      day: datesForWeek[index],
      name,
      image: weatherImageForWeek[index + 1],
      highestTemperature: highestTemperatureForWeek[index + 1],
      lowestTemperature: lowestTemperatureForWeek[index + 1],
      maximumTemperatureComparison: highestTemperatureDifferencesForWeek[index + 1],
      lowestTemperatureComparison: lowestTemperatureDifferencesForWeek[index + 1],
      rainProbability: rainProbability1[index + 1]
    }));
    console.log(dailyData);

    // WordPress REST APIエンドポイントにデータをPOST
    const postResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dailyData: dailyData
      })
    });
    if (!postResponse.ok) {
      throw new Error(`Failed to post data to ${apiUrl}. Status: ${postResponse.status}`);
    }
    if (typeof setTodayWeather !== 'function') {
      throw new Error('setTodayWeather is not a function.');
    }
    if (typeof setTomorrowWeather !== 'function') {
      throw new Error('setTomorrowWeather is not a function.');
    }
    if (typeof setWeeklyWeather !== 'function') {
      throw new Error('setWeeklyWeather is not a function.');
    }
    setTodayWeather(dailyData[0]);
    setTomorrowWeather(dailyData[1]);
    setWeeklyWeather(dailyData.slice(2, 7));
  } catch (error) {
    console.error('APIの呼び出しに失敗:', error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherObject);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/my-first-plugin","version":"0.1.0","title":"MyfirstPlugin","category":"text","icon":"flag","description":"A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.","attributes":{"showHoliday":{"type":"boolean","default":true},"showPrecipitation":{"type":"boolean","default":true},"tomorrowWeather":{"type":"object","default":{}},"weeklyWeather":{"type":"array","default":[]},"todayWeather":{"type":"object","default":{}}},"supports":{"html":false},"textdomain":"my-first-plugin","editorScript":"file:./index.js","editorStyle":"file:./style-index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_first_plugin"] = self["webpackChunkmy_first_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map