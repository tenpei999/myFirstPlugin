import getWeatherInfo from "./getWeatherInfo";
import dayWithHoliday from "./dayWithHoloday";
import { city } from "./getSpotWeather";

const weatherObject = async (
  setTodayWeather,
  setTomorrowWeather,
  setWeeklyWeather,
) => {

  try {
    console.log(city)

    // apiUrlの定義を追加
    const apiUrl = myPluginData.siteUrl + '/wp-json/my-weather-plugin/save-data/';

    // 2つ目のAPIリクエスト
    const request2 = fetch(city.tokyo)
      .then(response => {
        return response.json();
      });

    console.log(request2)

    const [data2] = await Promise.all([request2]);
    const datesForWeek = await dayWithHoliday();
    const weatherCodesForWeek = data2.daily.weathercode; // 本日から6日後までの天気コード

    // 天気コードを天気名に変換
    const weatherNamesForWeek = weatherCodesForWeek.map(code => getWeatherInfo(code).label);
    const weatherImageForWeek = weatherCodesForWeek.map(code => getWeatherInfo(code).icon);
    const highestTemperatureForWeek = data2.daily.temperature_2m_max; // 昨日から6日後までの天気コード
    const lowestTemperatureForWeek = data2.daily.temperature_2m_min; // 昨日から6日後までの天気コード
    const highestTemperatureDifferencesForWeek = [];

    for (let i = -1; i < highestTemperatureForWeek.length; i++) {
      const todayMaxTemperature = highestTemperatureForWeek[i + 1];
      const yesterdayMaxTemperature = highestTemperatureForWeek[i];
      const temperatureDifference = Math.ceil((todayMaxTemperature - yesterdayMaxTemperature) * 10) / 10;
      const formattedDifference = (temperatureDifference >= 0) ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;

      highestTemperatureDifferencesForWeek.push(formattedDifference);
    }

    const lowestTemperatureDifferencesForWeek = [];

    for (let i = -1; i < lowestTemperatureForWeek.length; i++) {
      const todayMinTemperature = lowestTemperatureForWeek[i + 1];
      const yesterdayMinTemperature = lowestTemperatureForWeek[i];
      const temperatureDifference = Math.ceil((todayMinTemperature - yesterdayMinTemperature) * 10) / 10;
      const formattedDifference = (temperatureDifference >= 0) ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;

      lowestTemperatureDifferencesForWeek.push(formattedDifference);
    }

    const rainProbability1 = {};

    for (let i = 1; i <= 7; i++) {
      let baseTime = i === 0 ? 0 : 24 * (i);
      rainProbability1[i] = [];

      for (let j = 0; j < 4; j++) {
        rainProbability1[i].push({
          time: data2.hourly.time[baseTime + j * 6],
          precipitation_probability: data2.hourly.precipitation_probability[baseTime + j * 6]
        });
      }
    }

    console.log(rainProbability1)

    const dailyData = weatherNamesForWeek.map((name, index) => ({
      day: datesForWeek[index],
      name,
      image: weatherImageForWeek[index + 1],
      highestTemperature: highestTemperatureForWeek[index + 1],
      lowestTemperature: lowestTemperatureForWeek[index + 1],
      maximumTemperatureComparison: highestTemperatureDifferencesForWeek[index + 1],
      lowestTemperatureComparison: lowestTemperatureDifferencesForWeek[index + 1],
      rainProbability: rainProbability1[index + 1],
    }));


    // WordPress REST APIエンドポイントにデータをPOST
    const postResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // JSON形式でデータを送信
        // 必要であれば認証ヘッダーを追加
      },
      body: JSON.stringify({ dailyData: dailyData })
    })

    if (!postResponse.ok) {
      throw new Error('Network response was not ok');
    }

    // 今日と明日の天気データをセット
    setTodayWeather(dailyData[0]);
    setTomorrowWeather(dailyData[1]);

    // 週間の天気データをセット
    setWeeklyWeather(dailyData.slice(2, 8));

  } catch (error) {
    console.error('APIの呼び出しに失敗:', error);
  };
}

export default weatherObject;