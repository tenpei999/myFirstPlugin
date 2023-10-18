import Temp from "./Temp";
import TimeZone from "./TimeZone";
import '../style.scss';

const CurrentWeather = ({
  borders,
  borderRadius,
  fontFamily,
  color,
  weather,
  title,
  showPrecipitation,
  showHoliday,
  styleVariant,
  backgroundStyleType,
  selectedMedia,
  backgroundGradient,
  backgroundColor
}) => {

  let backgroundStyles = {};

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

  // 背景スタイルタイプに応じた条件分岐
  switch (backgroundStyleType) {
    case 'image':
      // 画像が選択されている場合、背景画像として設定
      if (selectedMedia) {
        backgroundStyles = {
          backgroundImage: `url('${selectedMedia}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        };
      }
      break;

    case 'color':
      // グラデーションが選択されている場合、背景としてグラデーションを設定
      if (backgroundColor) {
        backgroundStyles = {
          background: backgroundColor,  // グラデーションのCSSをここに設定
        };
      }
      break;

    case 'gradient':
      // グラデーションが選択されている場合、背景としてグラデーションを設定
      if (backgroundGradient) {
        backgroundStyles = {
          background: backgroundGradient,  // グラデーションのCSSをここに設定
        };
      }
      break;

    default:
      // デフォルトの背景設定（必要に応じて）または何も適用しない
      break;
  }

  return (
    <article className={`block--current ${styleVariant}`} style={{
      ...borderStyles,
      borderRadius: borderRadius,
      fontFamily: fontFamily,
      ...backgroundStyles, 
      color
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
