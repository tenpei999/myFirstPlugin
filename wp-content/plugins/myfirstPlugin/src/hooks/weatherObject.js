import getWeatherInfo from "./getWeatherInfo";
import dayWithHoliday from "./dayWithHoloday";

const weatherObject = async (
  setTodayWeather,
  setTomorrowWeather,
  setWeeklyWeather,
) => {
  console.log("Testing getWeatherInfo with code 0:", getWeatherInfo(0).label);

  try {
    console.log('weatherObject function started'); // 関数が開始されたことを示す

    // apiUrlの定義を追加
    const apiUrl = myPluginData.siteUrl + '/wp-json/my-weather-plugin/save-data/';

    // 1つ目のAPIリクエスト
    const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
      .then(response => {
        console.log('Response from API 1:', response); // 1つ目のAPIからのレスポンス
        return response.json();
      });

    // 2つ目のAPIリクエスト
    const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=GMT&past_days=1&forecast_days=14')
      .then(response => {
        console.log('Response from API 2:', response); // 2つ目のAPIからのレスポンス
        return response.json();
      });

    const [data1, data2] = await Promise.all([request1, request2]);
    console.log('Both API requests completed');
    const datesForWeek = await dayWithHoliday();
    const weatherCodesForWeek = data2.daily.weathercode; // 本日から6日後までの天気コード
    console.log("weatherCodesForWeek:", weatherCodesForWeek);

    // 天気コードを天気名に変換
    const weatherNamesForWeek = weatherCodesForWeek.map(code => getWeatherInfo(code).label);
    console.log("weatherNamesForWeek:", weatherNamesForWeek);

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

      console.log(`Day ${i + 2}: ${todayMaxTemperature} ℃ (昨日との差分: ${formattedDifference} ℃)`);
    }

    console.log("昨日から6日後までの当日の最低気温と前日の最低気温の差分:");

    const lowestTemperatureDifferencesForWeek = [];

    for (let i = -1; i < lowestTemperatureForWeek.length; i++) {
      const todayMinTemperature = lowestTemperatureForWeek[i + 1];
      const yesterdayMinTemperature = lowestTemperatureForWeek[i];
      const temperatureDifference = Math.ceil((todayMinTemperature - yesterdayMinTemperature) * 10) / 10;
      const formattedDifference = (temperatureDifference >= 0) ? `(+${temperatureDifference})` : `(-${Math.abs(temperatureDifference)})`;

      lowestTemperatureDifferencesForWeek.push(formattedDifference);

      console.log(`Day ${i + 2}: ${todayMinTemperature} ℃ (昨日との差分: ${formattedDifference} ℃)`);
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
      image: weatherImageForWeek[index + 1],
      highestTemperature: highestTemperatureForWeek[index + 1],
      lowestTemperature: lowestTemperatureForWeek[index + 1],
      maximumTemperatureComparison: highestTemperatureDifferencesForWeek[index + 1],
      lowestTemperatureComparison: lowestTemperatureDifferencesForWeek[index + 1],
      rainProbability: threeDayRainProbability[index + 1]
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

    console.log('POST request status:', postResponse.status, postResponse.statusText); // POSTリクエストのステータスとテキストを表示
    if (!postResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const postResponseBody = await postResponse.json();
    console.log('POST request response:', postResponseBody); // POSTリクエストのレスポンスボディを表示


    console.log(dailyData);
    // 今日と明日の天気データをセット
    setTodayWeather(dailyData[0]);
    setTomorrowWeather(dailyData[1]);

    // 週間の天気データをセット
    setWeeklyWeather(dailyData.slice(2, 8));


    console.log("highestTemperatureForWeek:", highestTemperatureForWeek);
    console.log("lowestTemperatureForWeek:", lowestTemperatureForWeek);

  } catch (error) {
    console.error('APIの呼び出しに失敗:', error);
  };
}

export default weatherObject;