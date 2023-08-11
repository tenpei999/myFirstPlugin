import Temp from "./Temp";

const WeekCell = () => {
  return (
    <li class="dayAfterTommorw c-weather is-week">
      <h3 id="dayAfterTommorow" class="c-title__weather"></h3>
      <p id="dayAfterTommorowWeather" class="c-weather__weather"></p>
      <span id="dayAfterTommorowWeatherImg" class="c-weather__img"></span>
      <Temp />
    </li>
  )
}

export default WeekCell;