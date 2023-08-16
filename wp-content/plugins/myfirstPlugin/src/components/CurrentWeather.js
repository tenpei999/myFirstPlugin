import Temp from "./Temp";
import TimeZone from "./TimeZone";
import '../style.scss';

const CurrentWeather = ({ weather, title }) => {

  if (!weather || !weather.day) return null; // weather と weather.day の存在を確認

  const isHoliday = weather.day.isHoliday;

  let textColor;
  if (isHoliday  || weather.day.isSunday) {
    textColor = "red";
  } else if (weather.day.isSaturday) {
    textColor = "aqua";
  }

  return (
    <article className="block--current">
      <h3>{title}</h3>
      <h4 style={{ color: textColor }}>{weather.day.date}</h4>
      {weather.day.isHoliday && (
        <p id={`dayAfterTommorow_${index}`} >
          {weather.day.holidayName}
        </p>
      )}
      <p>{weather.name}</p>
      <img src={weather.image} alt="weather icon" />
      <Temp weather={weather} />
      <TimeZone weather={weather} />
    </article>
  )
}

export { CurrentWeather };
