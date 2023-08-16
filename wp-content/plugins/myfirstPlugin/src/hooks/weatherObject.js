import getWeatherInfo from "./getWeatherInfo";
import dayWithHoliday from "./dayWithHoloday";

const weatherObject = async (
  setTodayWeather,
  setTomorrowWeather,
  setWeeklyWeather,
) => {

  try {
    // 1つ目のAPIリクエスト
    const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
      .then(response => response.json());

    // 2つ目のAPIリクエスト
    const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo')
      .then(response => response.json());

    const [data1, data2] = await Promise.all([request1, request2]);
    const datesForWeek = await dayWithHoliday();

    const weatherCodesForWeek = data2.daily.weathercode.slice(0, 7); // 本日から6日後までの天気コード

    // 天気コードを天気名に変換
    const weatherNamesForWeek = weatherCodesForWeek.map(code => getWeatherInfo(code).label);
    const weatherImageForWeek = weatherCodesForWeek.map(code => getWeatherInfo(code).icon);
    const highestTemperatureForWeek = data2.daily.temperature_2m_max.slice(0, 8); // 昨日から6日後までの天気コード
    const lowestTemperatureForWeek = data2.daily.temperature_2m_min.slice(0, 8); // 昨日から6日後までの天気コード
    // console.log("昨日から6日後までの当日の最高気温と前日の最高気温の差分:");

    const highestTemperatureDifferencesForWeek = [];

    for (let i = 1; i < highestTemperatureForWeek.length; i++) {
      const todayMaxTemperature = highestTemperatureForWeek[i];
      const yesterdayMaxTemperature = highestTemperatureForWeek[i - 1];
      const temperatureDifference = Math.ceil((todayMaxTemperature - yesterdayMaxTemperature) * 10) / 10;
      const formattedDifference = (temperatureDifference >= 0) ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;

      highestTemperatureDifferencesForWeek.push(formattedDifference);

      // console.log(`Day ${i + 2}: ${todayMaxTemperature} ℃ (昨日との差分: ${formattedDifference} ℃)`);
    }

    // console.log("昨日から6日後までの当日の最低気温と前日の最低気温の差分:");

    const lowestTemperatureDifferencesForWeek = [];

    for (let i = 1; i < lowestTemperatureForWeek.length; i++) {
      const todayMinTemperature = lowestTemperatureForWeek[i];
      const yesterdayMinTemperature = lowestTemperatureForWeek[i - 1];
      const temperatureDifference = Math.ceil((todayMinTemperature - yesterdayMinTemperature) * 10) / 10;
      const formattedDifference = (temperatureDifference >= 0) ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;

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

    // console.log(dailyData);
    // 今日と明日の天気データをセット
    setTodayWeather(dailyData[0]);
    setTomorrowWeather(dailyData[1]);

    // 週間の天気データをセット
    setWeeklyWeather(dailyData.slice(2, 8));


    // console.log("highestTemperatureForWeek:", highestTemperatureForWeek);
    // console.log("lowestTemperatureForWeek:", lowestTemperatureForWeek);

  } catch (error) {
    console.error('APIの呼び出しに失敗:', error);
  };
}

export default weatherObject;