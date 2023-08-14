import Temp from "./Temp";
import TimeZone from "./TimeZone";
import '../style.scss';

const CurrentWeather = ({ weather, title }) => {

  if (!weather) return null;

  return (
    <article className="block--current">
      <h3>{title}</h3>
      <h4>{weather.day.date}</h4>
      <p>{weather.name}</p>
      <img src={weather.image} />
      <Temp weather={weather} />
      <TimeZone weather={weather} />
    </article>
  )
}

export { CurrentWeather };