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
export const getWeatherInfo = (weatherCode) => {
  // 0 : Clear Sky
  if (weatherCode === 0) {
    return { label: "快晴", icon: "./static/img/100.svg" };
  }
  if (weatherCode === 1) {
    return { label: "晴れ", icon: "./static/img/100.svg" };
  }
  // 2 : Partly Cloudy
  if (weatherCode === 2) {
    return { label: "一部曇", icon: "./static/img/101.svg" };
  }
  // 3 : Overcast
  if (weatherCode === 3) {
    return { label: "曇り", icon: "./static/img/200.svg" };
  }
  // 45, 48 : Fog And Depositing Rime Fog
  if (weatherCode <= 49) {
    return { label: "霧", icon: "./static/img/200.svg" };
  }
  // 51, 53, 55 : Drizzle Light, Moderate And Dense Intensity ・ 56, 57 : Freezing Drizzle Light And Dense Intensity
  if (weatherCode <= 59) {
    return { label: "霧雨", icon: "./static/img/202.svg" };
  }
  // 61, 63, 65 : Rain Slight, Moderate And Heavy Intensity ・66, 67 : Freezing Rain Light And Heavy Intensity
  if (weatherCode <= 69) {
    return { label: "雨", icon: "./static/img/300.svg" };
  }
  // 71, 73, 75 : Snow Fall Slight, Moderate And Heavy Intensity ・ 77 : Snow Grains
  if (weatherCode <= 79) {
    return { label: "雪", icon: "./static/img/400.svg" };
  }
  // 80, 81, 82 : Rain Showers Slight, Moderate And Violent
  if (weatherCode <= 84) {
    return { label: "俄か雨", icon: "./static/img/302.svg" };
  }
  // 85, 86 : Snow Showers Slight And Heavy
  if (weatherCode <= 94) {
    return { label: "雪・雹", icon: "./static/img/400.svg" };
  }
  // 95 : Thunderstorm Slight Or Moderate ・ 96, 99 : Thunderstorm With Slight And Heavy Hail
  if (weatherCode <= 99) {
    return { label: "雷雨", icon: "./static/img/300.svg" };
  }
  // その他はエラーとする
  return { label: "ERROR", icon: "" };
};