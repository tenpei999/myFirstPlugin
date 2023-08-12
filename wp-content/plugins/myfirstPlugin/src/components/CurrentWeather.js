import Temp from "./Temp";
import TimeZone from "./TimeZone";

const CurrentWeather = ({weather}) => {

  if (!weather) return null;

  return (
    <article>
      <p>{weather.name}</p>
      <img src={weather.image}/>
      <Temp weather={weather} />
      <TimeZone weather={weather} />
    </article>
  )
}

export { CurrentWeather };