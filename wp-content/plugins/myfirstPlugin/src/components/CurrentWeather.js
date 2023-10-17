import Temp from "./Temp";
import TimeZone from "./TimeZone";
import '../style.scss';

const CurrentWeather = ({
  borders,
  borderRadius,
  fontFamily,
  weather,
  title,
  showPrecipitation,
  showHoliday,
  styleVariant,
  selectedMedia,
}) => {


  if (!weather || !weather.day) return null; // weather と weather.day の存在を確認

  const isHoliday = weather.day.isHoliday;

  let textColor;
  if (isHoliday || weather.day.isSunday) {
    textColor = "red";
  } else if (weather.day.isSaturday) {
    textColor = "blue";
  }

  const borderStyles = {
    borderTop: `${borders.top.width} ${borders.top.style} ${borders.top.color}`,
    borderRight: `${borders.right.width} ${borders.right.style} ${borders.right.color}`,
    borderBottom: `${borders.bottom.width} ${borders.bottom.style} ${borders.bottom.color}`,
    borderLeft: `${borders.left.width} ${borders.left.style} ${borders.left.color}`
  };

  console.log(borders.top.width)
  return (
    <article className={`block--current ${styleVariant}`} style={{
      ...borderStyles,
      borderRadius: borderRadius,
      fontFamily: fontFamily,
      backgroundImage: selectedMedia ? `url('${selectedMedia}')` : 'none',
      backgroundSize: selectedMedia ? 'auto 100%' : 'auto', // background-size を設定
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <h3>{title}</h3>
      <h4 style={{ color: textColor }}>{weather.day.date.fullDate}</h4>

      {/* showHolidayがtrueの場合のみ祝日の名前を表示 */}
      {showHoliday && weather.day.isHoliday && (
        <p>{weather.day.holidayName}</p>
      )}

      <p className="weather__name">{weather.name}</p>
      <img src={weather.image} alt="weather icon" />
      <Temp weather={weather} />

      {/* showPrecipitationがtrueの場合のみTimeZoneコンポーネントを表示 */}
      {showPrecipitation && <TimeZone weather={weather} />}
    </article>
  )
}

export { CurrentWeather };
