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
  title
}) => {
  if (!weather) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    className: "block--current"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, weather.day.date), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: weather.image
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Temp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    weather: weather
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TimeZone__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.highestTemperature, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "\u2103")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.maximumTemperatureComparison)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.lowestTemperature, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "\u2103")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, weather.lowestTemperatureComparison)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Temp);
{/* <ul class="c-weather__temp--wrapper">
 <li class="c-weather__temp--left">
  <p class="max"><span id="todaysTempMax"></span><span class="celsius">℃</span></p>
  <p id="DBRTodaysMax" class="dbr-max"></p>
 </li>
 <li class="c-weather__temp--right">
  <p class="min"><span id="todaysTempMin"></span><span class="celsius">℃</span></p>
  <p id="DBRTodayMin" class="dbr-min"></p>
 </li>
 </ul> */}

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
    class: "c-weather__chanceOfRain-index"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "time"
  }, "\u6642\u9593"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "rain"
  }, "\u964D\u6C34")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    class: "c-weather__chanceOfRain-timezone1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "time"
  }, "0-6\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain1",
    class: "rain"
  }, weather.rainProbability[0])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    class: "c-weather__chanceOfRain-timezone2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "time"
  }, "6-12\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain2",
    class: "rain"
  }, weather.rainProbability[1])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    class: "c-weather__chanceOfRain-timezone3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "time"
  }, "12-18\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain3",
    class: "rain"
  }, weather.rainProbability[2])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    class: "c-weather__chanceOfRain-timezone4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "time"
  }, "18-24\u6642"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "todayschanceOfRain4",
    class: "rain"
  }, weather.rainProbability[3])));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeZone);

/***/ }),

/***/ "./src/components/WeekWeathew.js":
/*!***************************************!*\
  !*** ./src/components/WeekWeathew.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekWeather: () => (/* binding */ WeekWeather)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Weekcell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weekcell */ "./src/components/Weekcell.js");


const WeekWeather = ({
  weather
}) => {
  if (!weather) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "p-weather--week u-pb80 u-pt80"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "l-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Weekcell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    weather: weather
  })));
};


/***/ }),

/***/ "./src/components/Weekcell.js":
/*!************************************!*\
  !*** ./src/components/Weekcell.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Temp */ "./src/components/Temp.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");



const WeekCell = ({
  weather
}) => {
  if (!weather) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "layout block--weekly"
  }, weather.slice(0, 6).map((dayWeather, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: index,
    className: "block--day"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    id: `dayAfterTommorow_${index}`,
    class: "c-title__weather"
  }, dayWeather.day.date), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: `dayAfterTommorowWeather_${index}`,
    class: "c-weather__weather"
  }, dayWeather.name, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    id: `dayAfterTommorowWeatherImg_${index}`,
    class: "c-weather__img"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: dayWeather.image,
    alt: "Weather Icon"
  })), dayWeather.highestTemperature && dayWeather.lowestTemperature && dayWeather.maximumTemperatureComparison && dayWeather.lowestTemperatureComparison && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Temp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    weather: dayWeather
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeekCell);

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _hooks_weatherObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/weatherObject */ "./src/hooks/weatherObject.js");
/* harmony import */ var _components_CurrentWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CurrentWeather */ "./src/components/CurrentWeather.js");
/* harmony import */ var _components_WeekWeathew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/WeekWeathew */ "./src/components/WeekWeathew.js");

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









/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  const [todayWeather, setTodayWeather] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [tomorrowWeather, setTomorrowWeather] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [weeklyWeather, setWeeklyWeather] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_hooks_weatherObject__WEBPACK_IMPORTED_MODULE_5__["default"])(setTodayWeather, setTomorrowWeather, setWeeklyWeather);
  }, []); // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

  // 今日、明日、週間の天気データを小コンポーネントに渡す
  const TodayWeatherComponentProps = {
    weather: todayWeather
  };
  const TomorrowWeatherComponentProps = {
    weather: tomorrowWeather
  };
  const WeeklyWeatherComponentProps = {
    weather: weeklyWeather
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    className: "my-first-plugin"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CurrentWeather__WEBPACK_IMPORTED_MODULE_6__.CurrentWeather, {
    ...TodayWeatherComponentProps,
    title: "\u4ECA\u65E5\u306E\u5929\u6C17"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CurrentWeather__WEBPACK_IMPORTED_MODULE_6__.CurrentWeather, {
    ...TomorrowWeatherComponentProps,
    title: "\u660E\u65E5\u306E\u5929\u6C17"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_WeekWeathew__WEBPACK_IMPORTED_MODULE_7__.WeekWeather, {
    ...WeeklyWeatherComponentProps
  }));
}

/***/ }),

/***/ "./src/hooks/dayWithHoloday.js":
/*!*************************************!*\
  !*** ./src/hooks/dayWithHoloday.js ***!
  \*************************************/
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

    // console.log(oneWeekDatesWithHolidays);
    return oneWeekDatesWithHolidays;
  }
  return await getOneWeekDatesWithHolidays();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayWithHoliday);

/***/ }),

/***/ "./src/hooks/getWeatherInfo.js":
/*!*************************************!*\
  !*** ./src/hooks/getWeatherInfo.js ***!
  \*************************************/
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
  // 0 : Clear Sky
  if (weatherCode === 0) {
    return {
      label: "快晴",
      icon: pluginImagePath + '100.svg'
    };
  }
  if (weatherCode === 1) {
    return {
      label: "晴れ",
      icon: pluginImagePath + '100.svg'
    };
  }
  // 2 : Partly Cloudy
  if (weatherCode === 2) {
    return {
      label: "一部曇",
      icon: pluginImagePath + '101.svg'
    };
  }
  // 3 : Overcast
  if (weatherCode === 3) {
    return {
      label: "曇り",
      icon: pluginImagePath + '200.svg'
    };
  }
  // 45, 48 : Fog And Depositing Rime Fog
  if (weatherCode <= 49) {
    return {
      label: "霧",
      icon: pluginImagePath + '200.svg'
    };
  }
  // 51, 53, 55 : Drizzle Light, Moderate And Dense Intensity ・ 56, 57 : Freezing Drizzle Light And Dense Intensity
  if (weatherCode <= 59) {
    return {
      label: "霧雨",
      icon: pluginImagePath + '202.svg'
    };
  }
  // 61, 63, 65 : Rain Slight, Moderate And Heavy Intensity ・66, 67 : Freezing Rain Light And Heavy Intensity
  if (weatherCode <= 69) {
    return {
      label: "雨",
      icon: pluginImagePath + '300.svg'
    };
  }
  // 71, 73, 75 : Snow Fall Slight, Moderate And Heavy Intensity ・ 77 : Snow Grains
  if (weatherCode <= 79) {
    return {
      label: "雪",
      icon: pluginImagePath + '400.svg'
    };
  }
  // 80, 81, 82 : Rain Showers Slight, Moderate And Violent
  if (weatherCode <= 84) {
    return {
      label: "俄か雨",
      icon: pluginImagePath + '302.svg'
    };
  }
  // 85, 86 : Snow Showers Slight And Heavy
  if (weatherCode <= 94) {
    return {
      label: "雪・雹",
      icon: pluginImagePath + '400.svg'
    };
  }
  // 95 : Thunderstorm Slight Or Moderate ・ 96, 99 : Thunderstorm With Slight And Heavy Hail
  if (weatherCode <= 99) {
    return {
      label: "雷雨",
      icon: pluginImagePath + '300.svg'
    };
  }
  // その他はエラーとする
  console.log(weatherCode[0]);
  return {
    label: "ERROR",
    icon: ""
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherInfo);

/***/ }),

/***/ "./src/hooks/weatherObject.js":
/*!************************************!*\
  !*** ./src/hooks/weatherObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherInfo */ "./src/hooks/getWeatherInfo.js");
/* harmony import */ var _dayWithHoloday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dayWithHoloday */ "./src/hooks/dayWithHoloday.js");


const weatherObject = async (setTodayWeather, setTomorrowWeather, setWeeklyWeather) => {
  try {
    // 1つ目のAPIリクエスト
    const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010').then(response => response.json());

    // 2つ目のAPIリクエスト
    const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo').then(response => response.json());
    const [data1, data2] = await Promise.all([request1, request2]);
    const datesForWeek = await (0,_dayWithHoloday__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const weatherCodesForWeek = data2.daily.weathercode.slice(0, 7); // 本日から6日後までの天気コード

    // 天気コードを天気名に変換
    const weatherNamesForWeek = weatherCodesForWeek.map(code => (0,_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(code).label);
    const weatherImageForWeek = weatherCodesForWeek.map(code => (0,_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(code).icon);
    const highestTemperatureForWeek = data2.daily.temperature_2m_max.slice(0, 8); // 昨日から6日後までの天気コード
    const lowestTemperatureForWeek = data2.daily.temperature_2m_min.slice(0, 8); // 昨日から6日後までの天気コード
    // console.log("昨日から6日後までの当日の最高気温と前日の最高気温の差分:");

    const highestTemperatureDifferencesForWeek = [];
    for (let i = 1; i < highestTemperatureForWeek.length; i++) {
      const todayMaxTemperature = highestTemperatureForWeek[i];
      const yesterdayMaxTemperature = highestTemperatureForWeek[i - 1];
      const temperatureDifference = Math.ceil((todayMaxTemperature - yesterdayMaxTemperature) * 10) / 10;
      const formattedDifference = temperatureDifference >= 0 ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;
      highestTemperatureDifferencesForWeek.push(formattedDifference);

      // console.log(`Day ${i + 2}: ${todayMaxTemperature} ℃ (昨日との差分: ${formattedDifference} ℃)`);
    }

    // console.log("昨日から6日後までの当日の最低気温と前日の最低気温の差分:");

    const lowestTemperatureDifferencesForWeek = [];
    for (let i = 1; i < lowestTemperatureForWeek.length; i++) {
      const todayMinTemperature = lowestTemperatureForWeek[i];
      const yesterdayMinTemperature = lowestTemperatureForWeek[i - 1];
      const temperatureDifference = Math.ceil((todayMinTemperature - yesterdayMinTemperature) * 10) / 10;
      const formattedDifference = temperatureDifference >= 0 ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;
      lowestTemperatureDifferencesForWeek.push(formattedDifference);

      // console.log(`Day ${i + 2}: ${todayMinTemperature} ℃ (昨日との差分: ${formattedDifference} ℃)`);
    }

    /* 時間帯毎の天気 */
    const timeFrames = ['T00_06', 'T06_12', 'T12_18', 'T18_24'];
    const threeDayRainProbability = data1.forecasts.slice(0, 3).map(dayForecast => {
      return timeFrames.map(timeFrame => {
        return dayForecast.chanceOfRain[timeFrame];
      });
    });

    // console.log(weatherNamesForWeek);
    const dailyData = weatherNamesForWeek.map((name, index) => ({
      day: datesForWeek[index],
      name,
      image: weatherImageForWeek[index],
      highestTemperature: highestTemperatureForWeek[index],
      lowestTemperature: lowestTemperatureForWeek[index],
      maximumTemperatureComparison: highestTemperatureDifferencesForWeek[index],
      lowestTemperatureComparison: lowestTemperatureDifferencesForWeek[index],
      rainProbability: threeDayRainProbability[index]
    }));
    console.log(dailyData);
    // 今日と明日の天気データをセット
    setTodayWeather(dailyData[1]);
    setTomorrowWeather(dailyData[2]);

    // 週間の天気データをセット
    setWeeklyWeather(dailyData.slice(2, 8));

    // console.log("highestTemperatureForWeek:", highestTemperatureForWeek);
    // console.log("lowestTemperatureForWeek:", lowestTemperatureForWeek);
  } catch (error) {
    console.error('APIの呼び出しに失敗:', error);
  }
  ;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherObject);

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
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
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




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  /**
   * Used to construct a preview for the block to be shown in the block inserter.
   */
  example: {
    attributes: {
      message: 'my-first-plugin'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


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
function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  });
}

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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/my-first-plugin","version":"0.1.0","title":"MyfirstPlugin","category":"text","icon":"flag","description":"A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.","attributes":{"message":{"type":"string","source":"text","selector":"div"}},"supports":{"html":false},"textdomain":"my-first-plugin","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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