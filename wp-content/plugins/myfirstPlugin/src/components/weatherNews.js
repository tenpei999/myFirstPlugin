import weatherApi from "./wetherApi";

const weatherNews = () => {
  return (
    <>
      <section class="c-bg__color p-weather--today u-pb80 u-pt80">
        <h2 class="c-title__section">
          <p>
            今日/明日の天気
          </p>
        </h2>
        <div class="l-inner p-weather--today__days">
          <article class="c-weather is-today">
            <h3 class="c-title__weather">今日の天気</h3>
            <p id="todaysWeather" class="c-weather__weather"></p>
            <span id="todaysWeatherImg" class="c-weather__img"></span>
            <ul class="c-weather__temp--wrapper">
              <li class="c-weather__temp--left">
                <p class="max"><span id="todaysTempMax"></span><span class="celsius">℃</span></p>
                <p id="DBRTodaysMax" class="dbr-max"></p>
              </li>
              <li class="c-weather__temp--right">
                <p class="min"><span id="todaysTempMin"></span><span class="celsius">℃</span></p>
                <p id="DBRTodayMin" class="dbr-min"></p>
              </li>
            </ul>

            <ul class="c-weather__chanceOfRain">
              <li class="c-weather__chanceOfRain-index">
                <p class="time">時間</p>
                <p class="rain">降水</p>
              </li>
              <li class="c-weather__chanceOfRain-timezone1">
                <p class="time">0-6時</p>
                <p id="todayschanceOfRain1" class="rain"></p>
              </li>
              <li class="c-weather__chanceOfRain-timezone2">
                <p class="time">6-12時</p>
                <p id="todayschanceOfRain2" class="rain"></p>
              </li>
              <li class="c-weather__chanceOfRain-timezone3">
                <p class="time">12-18時</p>
                <p id="todayschanceOfRain3" class="rain"></p>
              </li>
              <li class="c-weather__chanceOfRain-timezone4">
                <p class="time">18-24時</p>
                <p id="todayschanceOfRain4" class="rain"></p>
              </li>
            </ul>
          </article>
          <article class="c-weather is-tomorrow">
            <h3 class="c-title__weather is-tomorrow">明日の天気</h3>
            <p id="tommorowsWeather" class="c-weather__weather"></p>
            <span id="tommorowsWeatherImg" class="c-weather__img"></span>
            <ul class="c-weather__temp--wrapper">
              <li class="c-weather__temp--left">
                <p class="max"><span id="tommorowsTempMax"></span><span class="celsius">℃</span></p>
                <p id="DBRTommorowMax" class="dbr-max"></p>
              </li>
              <li class="c-weather__temp--right">
                <p class="min"><span id="tommorowsTempMin"></span><span class="celsius">℃</span></p>
                <p id="DBRTommorowMin" class="dbr-min"></p>
              </li>
            </ul>
            <ul class="c-weather__chanceOfRain">
              <li class="c-weather__chanceOfRain-index">
                <p class="time">時間</p>
                <p class="rain">降水</p>
              </li>
              <li class="c-weather__chanceOfRain-timezone1">
                <p class="time">0-6時</p>
                <p id="tommorowschanceOfRain1" class="rain"></p>
              </li>
              <li class="c-weather__chanceOfRain-timezone2">
                <p class="time">6-12時</p>
                <p id="tommorowschanceOfRain2" class="rain"></p>
              </li>
              <li class="c-weather__chanceOfRain-timezone3">
                <p class="time">12-18時</p>
                <p id="tommorowschanceOfRain3" class="rain"></p>
              </li>
              <li class="c-weather__chanceOfRain-timezone4">
                <p class="time">18-24時</p>
                <p id="tommorowschanceOfRain4" class="rain"></p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section class="p-weather--week u-pb80 u-pt80">
        <h2 class="c-title__section">
          <p>
            今週の天気
          </p>
        </h2>
        <div class="l-inner">
          <ul class="p-weather--week__container">
            <li class="dayAfterTommorw c-weather is-week">
              <h3 id="dayAfterTommorow" class="c-title__weather"></h3>
              <p id="dayAfterTommorowWeather" class="c-weather__weather"></p>
              <span id="dayAfterTommorowWeatherImg" class="c-weather__img"></span>
              <ul class="c-weather__temp--wrapper">
                <li class="c-weather__temp--left">
                  <p class="max"><span id="dayAfterTommorowTempMax"></span><span class="celsius">℃</span></p>
                  <p id="DBRDayAfterTommorowMax" class="dbr-max"></p>
                </li>
                <li class="c-weather__temp--right">
                  <p class="min"><span id="dayAfterTommorowTempMin"></span><span class="celsius">℃</span></p>
                  <p id="DBRDayAfterTommorowMin" class="dbr-min"></p>
                </li>
              </ul>
            </li>
            <li class="threeDayLayter c-weather is-week">
              <h3 id="threeDayLater" class="c-title__weather"></h3>
              <p id="threeDayLaterWeather" class="c-weather__weather"></p>
              <span id="threeDayLaterWeatherImg" class="c-weather__img"></span>
              <ul class="c-weather__temp--wrapper">
                <li class="c-weather__temp--left">
                  <p class="max"><span id="threeDayLaterTempMax"></span><span class="celsius">℃</span></p>
                  <p id="DBRthreeDayLaterMax" class="dbr-max"></p>
                </li>
                <li class="c-weather__temp--right">
                  <p class="min"><span id="threeDayLaterTempMin"></span><span class="celsius">℃</span></p>
                  <p id="DBRthreeDayLaterMin" class="dbr-min"></p>
                </li>
              </ul>
            </li>
            <li class="foureDaiLayter c-weather is-week">
              <h3 id="fourDayLater" class="c-title__weather"></h3>
              <p id="fourDayLaterWeather" class="c-weather__weather"></p>
              <span id="fourDayLaterWeatherImg" class="c-weather__img"></span>
              <ul class="c-weather__temp--wrapper">
                <li class="c-weather__temp--left">
                  <p class="max"><span id="fourDayLaterTempMax"></span><span class="celsius">℃</span></p>
                  <p id="DBRfourDayLaterMax" class="dbr-max"></p>
                </li>
                <li class="c-weather__temp--right">
                  <p class="min"><span id="fourDayLaterTempMin"></span><span class="celsius">℃</span></p>
                  <p id="DBRfourDayLaterMin" class="dbr-min"></p>
                </li>
              </ul>
            </li>
            <li class="fiveDayLaiter c-weather is-week">
              <h3 id="fiveDayLater" class="c-title__weather"></h3>
              <p id="fiveDayLaterWeather" class="c-weather__weather"></p>
              <span id="fiveDayLaterWeatherImg" class="c-weather__img"></span>
              <ul class="c-weather__temp--wrapper">
                <li class="c-weather__temp--left">
                  <p class="max"><span id="fiveDayLaterTempMax"></span><span class="celsius">℃</span></p>
                  <p id="DBRfiveDayLaterMax" class="dbr-max"></p>
                </li>
                <li class="c-weather__temp--right">
                  <p class="min"><span id="fiveDayLaterTempMin"></span><span class="celsius">℃</span></p>
                  <p id="DBRfiveDayLaterMin" class="dbr-min"></p>
                </li>
              </ul>
            </li>
            <li class="sixDayLater c-weather is-week">
              <h3 id="sixDayLater" class="c-title__weather"></h3>
              <p id="sixDayLaterWeather" class="c-weather__weather"></p>
              <span id="sixDayLaterWeatherImg" class="c-weather__img"></span>
              <ul class="c-weather__temp--wrapper">
                <li class="c-weather__temp--left">
                  <p class="max"><span id="sixDayLaterTempMax"></span><span class="celsius">℃</span></p>
                  <p id="DBRsixDayLaterMax" class="dbr-max"></p>
                </li>
                <li class="c-weather__temp--right">
                  <p class="min"><span id="sixDayLaterTempMin"></span><span class="celsius">℃</span></p>
                  <p id="DBRsixDayLaterMin" class="dbr-min"></p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default weatherNews;