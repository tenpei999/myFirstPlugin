import Temp from "./Temp";
import TimeZone from "./TimeZone";
import '../style.scss';

const CurrentWeather = ({ weather, title, showPrecipitation, showHoliday }) => {

  if (!weather || !weather.day) return null; // weather と weather.day の存在を確認

  const isHoliday = weather.day.isHoliday;

  let textColor;
  if (isHoliday || weather.day.isSunday) {
    textColor = "red";
  } else if (weather.day.isSaturday) {
    textColor = "blue";
  }

  return (
    <article className="block--current">
      <h3>{title}</h3>
      <h4 style={{ color: textColor }}>{weather.day.date}</h4>

      {/* showHolidayがtrueの場合のみ祝日の名前を表示 */}
      {showHoliday && weather.day.isHoliday && (
        <p>{weather.day.holidayName}</p>
      )}

      <p>{weather.name}</p>
      <img src={weather.image} alt="weather icon" />
      <Temp weather={weather} />

      {/* showPrecipitationがtrueの場合のみTimeZoneコンポーネントを表示 */}
      {showPrecipitation && <TimeZone weather={weather} />}
    </article>
  )
}

export { CurrentWeather };
