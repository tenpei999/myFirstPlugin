const TimeZone = ({weather}) => {

  if (!weather) return null;

  return (
    <ul className="time-zone">
      <li class="c-weather__chanceOfRain-index">
        <p class="time">時間</p>
        <p class="rain">降水</p>
      </li>
      <li class="c-weather__chanceOfRain-timezone1">
        <p class="time">0-6時</p>
        <p id="todayschanceOfRain1" class="rain">{weather.rainProbability[0]
}</p>
      </li>
      <li class="c-weather__chanceOfRain-timezone2">
        <p class="time">6-12時</p>
        <p id="todayschanceOfRain2" class="rain">{weather.rainProbability[1]
}</p>
      </li>
      <li class="c-weather__chanceOfRain-timezone3">
        <p class="time">12-18時</p>
        <p id="todayschanceOfRain3" class="rain">{weather.rainProbability[2]
}</p>
      </li>
      <li class="c-weather__chanceOfRain-timezone4">
        <p class="time">18-24時</p>
        <p id="todayschanceOfRain4" class="rain">{weather.rainProbability[3]
}</p>
      </li>
    </ul>
  )
}

export default TimeZone;