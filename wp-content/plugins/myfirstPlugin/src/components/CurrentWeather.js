import { createElement } from '@wordpress/element';
import Temp from "./Temp";
import TimeZone from "./TimeZone";

const CurrentWeather = (props) => {

  const { apiData1, apiData2 } = props;
  return (
    <article class="c-weather is-today">
      <p id="todaysWeather" class="c-weather__weather"></p>
      <span id="todaysWeatherImg" class="c-weather__img"></span>
      <Temp />
      <TimeZone />
    </article>
  )
}

export { CurrentWeather };