import { getWeatherInfo } from '../../assets/hooks/getWeatherInfo';

const weatherApi = () => {

  window.addEventListener('DOMContentLoaded', () => {
    getWeatherInfo();
  });
  
  // 1つ目のAPIリクエスト
  const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
    .then(response => response.json());
  
  // 2つ目のAPIリクエスト
  const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo')
    .then(response => response.json());
  
  // 両方のリクエストが完了したら処理を実行
  Promise.all([request1, request2])
    .then(data => {
      const data1 = data[0]; // 1つ目のAPIのレスポンスデータ
      const data2 = data[1]; // 2つ目のAPIのレスポンスデータ
  
  
      /*日付
      -----------------------*/
  
      function formatDate(dateString) {
        const months = [
          "1月", "2月", "3月", "4月", "5月", "6月",
          "7月", "8月", "9月", "10月", "11月", "12月"
        ];
  
        const days = ["日", "月", "火", "水", "木", "金", "土"];
  
        const date = new Date(dateString);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const dayOfWeek = days[date.getDay()];
  
        return `${month}${day}日(${dayOfWeek})`;
      }
  
      const currentDate = new Date(); // 現在の日付を取得
  
      //明後日の日付
      const dayAfterTommorow = new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000);
      const formattedDayAfterTommorow = formatDate(dayAfterTommorow);
      const dayAfterTommorowElementID = 'dayAfterTommorow';
      const dayAfterTommorowElement = document.getElementById(dayAfterTommorowElementID);
      dayAfterTommorowElement.innerHTML = formattedDayAfterTommorow;
  
      // 三日後の日付
      const threeDayLater = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);
      const formattedThreeDayLater = formatDate(threeDayLater);
      const threeDayLaterElementID = 'threeDayLater';
      const threeDayLaterElement = document.getElementById(threeDayLaterElementID);
      threeDayLaterElement.innerHTML = formattedThreeDayLater;
  
      //四日後の日付
      const fourDayLater = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
      const formattedFourDayLater = formatDate(fourDayLater);
      const fourDayLaterElementID = 'fourDayLater';
      const fourDayLaterElement = document.getElementById(fourDayLaterElementID);
      fourDayLaterElement.innerHTML = formattedFourDayLater;
  
      //五日後の日付
      const fiveDayLater = new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000);
      const formattedFiveDayLater = formatDate(fiveDayLater);
      const fiveDayLaterElementID = 'fiveDayLater';
      const fiveDayLaterElement = document.getElementById(fiveDayLaterElementID);
      fiveDayLaterElement.innerHTML = formattedFiveDayLater;
  
      // 六日後の日付
      const sixDayLater = new Date(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000);
      const formattedSixDayLater = formatDate(sixDayLater);
      const sixDayLaterElementID = 'sixDayLater';
      const sixDayLaterElement = document.getElementById(sixDayLaterElementID);
      sixDayLaterElement.innerHTML = formattedSixDayLater;
  
  
      /*天気
      -----------------------*/
      //今日の天気
      const todaysWeatherID = data2.daily.weathercode[1];
      const todaysWeather = getWeatherInfo(todaysWeatherID).label;
      const todaysWeatherElementId = 'todaysWeather';
      const todaysWeatherElement = document.getElementById(todaysWeatherElementId);
      todaysWeatherElement.innerHTML = todaysWeather;
  
      //明日の天気
      const tommorowsWeatherID = data2.daily.weathercode[2];
      const tommorowsWeather = getWeatherInfo(tommorowsWeatherID).label;
      const tommorowsWeatherElementId = 'tommorowsWeather';
      const tommorowsWeatherElement = document.getElementById(tommorowsWeatherElementId);
      tommorowsWeatherElement.innerHTML = tommorowsWeather;
  
      //明後日の天気
      const dayAfterTommorowWeatherID = data2.daily.weathercode[3];
      const dayAfterTommorowWeather = getWeatherInfo(dayAfterTommorowWeatherID).label;
      const dayAfterTommorowWeatherElementId = 'dayAfterTommorowWeather';
      const dayAfterTommorowWeatherElement = document.getElementById(dayAfterTommorowWeatherElementId);
      dayAfterTommorowWeatherElement.innerHTML = dayAfterTommorowWeather;
  
      //三日後の天気
      const threeDayLaterWeatherID = data2.daily.weathercode[4];
      const threeDayLaterWeather = getWeatherInfo(threeDayLaterWeatherID).label;
      const threeDaysLaterWeatherElementID = 'threeDayLaterWeather'
      const threeDayLaterWeatherElement = document.getElementById(threeDaysLaterWeatherElementID);
      threeDayLaterWeatherElement.innerHTML = threeDayLaterWeather;
  
      //四日後の天気
      const fourDayLaterWeatherID = data2.daily.weathercode[5];
      const fourDayLaterWeather = getWeatherInfo(fourDayLaterWeatherID).label;
      const fourDayLaterWeatherElementID = 'fourDayLaterWeather';
      const fourDaysLaterWeatherElement = document.getElementById(fourDayLaterWeatherElementID);
      fourDaysLaterWeatherElement.innerHTML = fourDayLaterWeather;
  
      //五日後の天気
      const fiveDayLaterWeatherID = data2.daily.weathercode[6];
      const fiveDayLaterWeather = getWeatherInfo(fiveDayLaterWeatherID).label;
      const fiveDayLaterWeatherElementID = 'fiveDayLaterWeather'
      const fiveDayLaterWeatherElement = document.getElementById(fiveDayLaterWeatherElementID);
      fiveDayLaterWeatherElement.innerHTML = fiveDayLaterWeather;
  
      //六日後の天気
      const sixDayLaterWeatherID = data2.daily.weathercode[7];
      const sixDayLaterWeather = getWeatherInfo(sixDayLaterWeatherID).label;
      const sixDayLaterWeatherElementID = 'sixDayLaterWeather'
      const sixDayLaterWeatherElement = document.getElementById(sixDayLaterWeatherElementID);
      sixDayLaterWeatherElement.innerHTML = sixDayLaterWeather;
  
  
      /*天気アイコン
      -----------------------------*/
      //今日の天気アイコン
      const todaysWeatherImg = getWeatherInfo(todaysWeatherID).icon;
      const todaysWeatherImgElementId = 'todaysWeatherImg';
      const todaysWeatherImgElementIDParent = document.getElementById(todaysWeatherImgElementId);
      const todaysWeatherImgElementChild = document.createElement('img');
      todaysWeatherImgElementChild.src = todaysWeatherImg;
      todaysWeatherImgElementIDParent.appendChild(todaysWeatherImgElementChild);
  
      //明日の天気アイコン
      const tommorowsWeatherImg = getWeatherInfo(tommorowsWeatherID).icon;
      const tommorowsWeatherImgElementId = 'tommorowsWeatherImg';
      const tommorowsWeatherImgElementIDParent = document.getElementById(tommorowsWeatherImgElementId);
      const tommorowsWeatherImgElementChild = document.createElement('img');
      tommorowsWeatherImgElementChild.src = tommorowsWeatherImg;
      tommorowsWeatherImgElementIDParent.appendChild(tommorowsWeatherImgElementChild);
  
      //明後日の天気アイコン
      const dayAfterTommorowWeatherImg = getWeatherInfo(dayAfterTommorowWeatherID).icon;
      const dayAfterTommorowWeatherImgElementId = 'dayAfterTommorowWeatherImg';
      const dayAfterTommorowWeatherImgElementIDParent = document.getElementById(dayAfterTommorowWeatherImgElementId);
      const dayAfterTommorowWeatherImgElementChild = document.createElement('img');
      dayAfterTommorowWeatherImgElementChild.src = dayAfterTommorowWeatherImg;
      dayAfterTommorowWeatherImgElementIDParent.appendChild(dayAfterTommorowWeatherImgElementChild);
  
      //三日後の天気アイコン
      const threeDayLaterWeatherImg = getWeatherInfo(threeDayLaterWeatherID).icon;
      const threeDayLaterWeatherImgElementId = 'threeDayLaterWeatherImg';
      const threeDayLaterWeatherImgElementIDParent = document.getElementById(threeDayLaterWeatherImgElementId);
      const threeDayLaterWeatherImgElementChild = document.createElement('img');
      threeDayLaterWeatherImgElementChild.src = threeDayLaterWeatherImg;
      threeDayLaterWeatherImgElementIDParent.appendChild(threeDayLaterWeatherImgElementChild);
  
      //四日後の天気アイコン
      const fourDayLaterWeatherImg = getWeatherInfo(fourDayLaterWeatherID).icon;
      const fourDayLaterWeatherImgElementId = 'fourDayLaterWeatherImg';
      const fourDayLaterWeatherImgElementIDParent = document.getElementById(fourDayLaterWeatherImgElementId);
      const fourDayLaterWeatherImgElementChild = document.createElement('img');
      fourDayLaterWeatherImgElementChild.src = fourDayLaterWeatherImg;
      fourDayLaterWeatherImgElementIDParent.appendChild(fourDayLaterWeatherImgElementChild);
  
      //五日後の天気アイコン
      const fiveDayLaterWeatherImg = getWeatherInfo(fiveDayLaterWeatherID).icon;
      const fiveDayLaterWeatherImgElementId = 'fiveDayLaterWeatherImg';
      const fiveDayLaterWeatherImgElementIDParent = document.getElementById(fiveDayLaterWeatherImgElementId);
      const fiveDayLaterWeatherImgElementChild = document.createElement('img');
      fiveDayLaterWeatherImgElementChild.src = fiveDayLaterWeatherImg;
      fiveDayLaterWeatherImgElementIDParent.appendChild(fiveDayLaterWeatherImgElementChild);
  
      //六日後の天気アイコン
      const sixDayLaterWeatherImg = getWeatherInfo(sixDayLaterWeatherID).icon;
      const sixDayLaterWeatherImgElementId = 'sixDayLaterWeatherImg';
      const sixDayLaterWeatherImgElementIDParent = document.getElementById(sixDayLaterWeatherImgElementId);
      const sixDayLaterWeatherImgElementChild = document.createElement('img');
      sixDayLaterWeatherImgElementChild.src = sixDayLaterWeatherImg;
      sixDayLaterWeatherImgElementIDParent.appendChild(sixDayLaterWeatherImgElementChild);
  
  
      /*最高気温
      -----------------------------*/
  
      //昨日の最高気温
      const yesterdayTempMax = data2.daily.temperature_2m_max[0];
  
      //今日の最高気温
      const todaysTempMax = data2.daily.temperature_2m_max[1];
      const todaysTempMaxElementID = 'todaysTempMax';
      const todaysTempMaxElement = document.getElementById(todaysTempMaxElementID);
      todaysTempMaxElement.innerHTML = todaysTempMax;
  
      //明日の最高気温
      const tommorowsTempMax = data2.daily.temperature_2m_max[2];
      const tommorowsTempMaxElementID = 'tommorowsTempMax';
      const tommorowsTempMaxElement = document.getElementById(tommorowsTempMaxElementID);
      tommorowsTempMaxElement.innerHTML = tommorowsTempMax;
  
      //明後日の最高気温
      const dayAfterTommorowTempMax = data2.daily.temperature_2m_max[3];
      const dayAfterTommorowTempMaxElementID = 'dayAfterTommorowTempMax';
      const dayAfterTommorowTempMaxElement = document.getElementById(dayAfterTommorowTempMaxElementID);
      dayAfterTommorowTempMaxElement.innerHTML = dayAfterTommorowTempMax;
  
      //三日後の最高気温
      const threeDayLaterTempMax = data2.daily.temperature_2m_max[4];
      const threeDayLaterTempMaxElementID = 'threeDayLaterTempMax';
      const threeDayLaterTempMaxElement = document.getElementById(threeDayLaterTempMaxElementID);
      threeDayLaterTempMaxElement.innerHTML = threeDayLaterTempMax;
  
      //四日後の最高気温
      const fourDayLaterTempMax = data2.daily.temperature_2m_max[5];
      const fourDayLaterTempMaxElementID = 'fourDayLaterTempMax';
      const fourDayLaterTempMaxElement = document.getElementById(fourDayLaterTempMaxElementID);
      fourDayLaterTempMaxElement.innerHTML = fourDayLaterTempMax;
  
      //五日後の最高気温
      const fiveDayLaterTempMax = data2.daily.temperature_2m_max[6];
      const fiveDayLaterTempMaxElementID = 'fiveDayLaterTempMax';
      const fiveDayLaterTempMaxElement = document.getElementById(fiveDayLaterTempMaxElementID);
      fiveDayLaterTempMaxElement.innerHTML = fiveDayLaterTempMax;
  
      //六日後の最高気温
      const sixDayLaterTempMax = data2.daily.temperature_2m_max[7];
      const sixDayLaterTempMaxElementID = 'sixDayLaterTempMax';
      const sixDayLaterTempMaxElement = document.getElementById(sixDayLaterTempMaxElementID);
      sixDayLaterTempMaxElement.innerHTML = sixDayLaterTempMax;
  
      /*最低気温
      -----------------------------*/
  
      //昨日の最低気温
      const yesterdayTempMin = data2.daily.temperature_2m_min[0];
  
      //今日の最低気温
      const todaysTempMin = data2.daily.temperature_2m_min[1];
      const todaysTempMinElementID = 'todaysTempMin';
      const todaysTempMinElement = document.getElementById(todaysTempMinElementID);
      todaysTempMinElement.innerHTML = todaysTempMin;
  
      //明日の最低気温
      const tommorowsTempMin = data2.daily.temperature_2m_min[2];
      const tommorowsTempMinElementID = 'tommorowsTempMin';
      const tommorowsTempMinElement = document.getElementById(tommorowsTempMinElementID);
      tommorowsTempMinElement.innerHTML = tommorowsTempMin;
  
      //明後日の最低気温
      const dayAfterTommorowTempMin = data2.daily.temperature_2m_min[3];
      const dayAfterTommorowTempMinElementID = 'dayAfterTommorowTempMin';
      const dayAfterTommorowTempMinElement = document.getElementById(dayAfterTommorowTempMinElementID);
      dayAfterTommorowTempMinElement.innerHTML = dayAfterTommorowTempMin;
  
      //三日後の最低気温
      const threeDayLaterTempMin = data2.daily.temperature_2m_min[4];
      const threeDayLaterTempMinElementID = 'threeDayLaterTempMin';
      const threeDayLaterTempMinElement = document.getElementById(threeDayLaterTempMinElementID);
      threeDayLaterTempMinElement.innerHTML = threeDayLaterTempMin;
  
      //四日後の最低気温
      const fourDayLaterTempMin = data2.daily.temperature_2m_min[5];
      const fourDayLaterTempMinElementID = 'fourDayLaterTempMin';
      const fourDayLaterTempMinElement = document.getElementById(fourDayLaterTempMinElementID);
      fourDayLaterTempMinElement.innerHTML = fourDayLaterTempMin;
  
      //五日後の最高気温
      const fiveDayLaterTempMin = data2.daily.temperature_2m_min[6];
      const fiveDayLaterTempMinElementID = 'fiveDayLaterTempMin';
      const fiveDayLaterTempMinElement = document.getElementById(fiveDayLaterTempMinElementID);
      fiveDayLaterTempMinElement.innerHTML = fiveDayLaterTempMin;
  
      //六日後の最高気温
      const sixDayLaterTempMin = data2.daily.temperature_2m_min[7];
      const sixDayLaterTempMinElementID = 'sixDayLaterTempMin';
      const sixDayLaterTempMinElement = document.getElementById(sixDayLaterTempMinElementID);
      sixDayLaterTempMinElement.innerHTML = sixDayLaterTempMin;
  
  
      /*前日比
      -----------------------------*/
  
      // 差分を計算して表示する関数
      function calculateAndDisplayDifference(currentTemp, previousTemp, elementID) {
        const difference = Math.floor(currentTemp - previousTemp);
        const sign = difference > 0 ? "+" : "-";
  
        const element = document.getElementById(elementID);
        element.innerHTML = '[' + sign + Math.abs(difference) + ']';
      }
  
      //最高気温
      calculateAndDisplayDifference(todaysTempMax, yesterdayTempMax, 'DBRTodaysMax');
      calculateAndDisplayDifference(tommorowsTempMax, todaysTempMax, 'DBRTommorowMax');
      calculateAndDisplayDifference(dayAfterTommorowTempMax, tommorowsTempMax, 'DBRDayAfterTommorowMax');
      calculateAndDisplayDifference(threeDayLaterTempMax, dayAfterTommorowTempMax, 'DBRthreeDayLaterMax');
      calculateAndDisplayDifference(fourDayLaterTempMax, threeDayLaterTempMax, 'DBRfourDayLaterMax');
      calculateAndDisplayDifference(fiveDayLaterTempMax, fourDayLaterTempMax, 'DBRfiveDayLaterMax');
      calculateAndDisplayDifference(sixDayLaterTempMax, fiveDayLaterTempMax, 'DBRsixDayLaterMax');
  
      //最低気温
      calculateAndDisplayDifference(todaysTempMin, yesterdayTempMin, 'DBRTodayMin');
      calculateAndDisplayDifference(tommorowsTempMin, todaysTempMin, 'DBRTommorowMin');
      calculateAndDisplayDifference(dayAfterTommorowTempMin, tommorowsTempMin, 'DBRDayAfterTommorowMin');
      calculateAndDisplayDifference(threeDayLaterTempMin, dayAfterTommorowTempMin, 'DBRthreeDayLaterMin');
      calculateAndDisplayDifference(fourDayLaterTempMin, threeDayLaterTempMin, 'DBRfourDayLaterMin');
      calculateAndDisplayDifference(fiveDayLaterTempMin, fourDayLaterTempMin, 'DBRfiveDayLaterMin');
      calculateAndDisplayDifference(sixDayLaterTempMin, fiveDayLaterTempMin, 'DBRsixDayLaterMin');
  
  
      /*時間帯毎の天気
      -----------------------------*/
  
      /*今日--*/
      //時間帯
      const todayschanceOfRain1 = data1.forecasts[0].chanceOfRain.T00_06;
      const todayschanceOfRain2 = data1.forecasts[0].chanceOfRain.T06_12;
      const todayschanceOfRain3 = data1.forecasts[0].chanceOfRain.T12_18;
      const todayschanceOfRain4 = data1.forecasts[0].chanceOfRain.T18_24;
  
      //エレメント
      const todaysChanceOfRainElementID1 = 'todayschanceOfRain1';
      const todaysChanceOfRainElementID2 = 'todayschanceOfRain2';
      const todaysChanceOfRainElementID3 = 'todayschanceOfRain3';
      const todaysChanceOfRainElementID4 = 'todayschanceOfRain4';
      const todaysChanceOfRainElement1 = document.getElementById(todaysChanceOfRainElementID1);
      const todaysChanceOfRainElement2 = document.getElementById(todaysChanceOfRainElementID2);
      const todaysChanceOfRainElement3 = document.getElementById(todaysChanceOfRainElementID3);
      const todaysChanceOfRainElement4 = document.getElementById(todaysChanceOfRainElementID4);
  
      //html生成
      todaysChanceOfRainElement1.innerHTML = todayschanceOfRain1;
      todaysChanceOfRainElement2.innerHTML = todayschanceOfRain2;
      todaysChanceOfRainElement3.innerHTML = todayschanceOfRain3;
      todaysChanceOfRainElement4.innerHTML = todayschanceOfRain4;
  
  
      /*明日--*/
      //時間帯
      const tommorowschanceOfRain1 = data1.forecasts[1].chanceOfRain.T00_06;
      const tommorowschanceOfRain2 = data1.forecasts[1].chanceOfRain.T06_12;
      const tommorowschanceOfRain3 = data1.forecasts[1].chanceOfRain.T12_18;
      const tommorowschanceOfRain4 = data1.forecasts[1].chanceOfRain.T18_24;
  
      //エレメント
      const tommorowsChanceOfRainElementID1 = 'tommorowschanceOfRain1';
      const tommorowsChanceOfRainElementID2 = 'tommorowschanceOfRain2';
      const tommorowsChanceOfRainElementID3 = 'tommorowschanceOfRain3';
      const tommorowsChanceOfRainElementID4 = 'tommorowschanceOfRain4';
      const tommorowsChanceOfRainElement1 = document.getElementById(tommorowsChanceOfRainElementID1);
      const tommorowsChanceOfRainElement2 = document.getElementById(tommorowsChanceOfRainElementID2);
      const tommorowsChanceOfRainElement3 = document.getElementById(tommorowsChanceOfRainElementID3);
      const tommorowsChanceOfRainElement4 = document.getElementById(tommorowsChanceOfRainElementID4);
  
      //html生成
      tommorowsChanceOfRainElement1.innerHTML = tommorowschanceOfRain1;
      tommorowsChanceOfRainElement2.innerHTML = tommorowschanceOfRain2;
      tommorowsChanceOfRainElement3.innerHTML = tommorowschanceOfRain3;
      tommorowsChanceOfRainElement4.innerHTML = tommorowschanceOfRain4;
  
    });
}

export default weatherApi;

