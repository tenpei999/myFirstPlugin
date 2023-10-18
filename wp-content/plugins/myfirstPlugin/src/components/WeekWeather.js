import Temp from './Temp';
import '../editor.scss';
import '../style.scss';

const WeekWeather = ({
  borders,
  borderRadius,
  fontFamily,
  weather,
  color,
  styleVariant,
  backgroundStyleType,
  selectedMedia,
  backgroundGradient,
  backgroundColor,
}) => {

  if (!weather) return null;

  let backgroundStyles = {};

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
    <ul className={`block--weekly weather-layout ${styleVariant}`}
      style={{
        ...borderStyles,
        borderRadius: borderRadius,
        fontFamily: fontFamily,
        ...backgroundStyles,
        color
      }}>
      {weather.slice(0, 6).map((dayWeather) => {
        if (!dayWeather || !dayWeather.day) return null;

        let textColor;
        if (dayWeather.day.isHoliday || dayWeather.day.isSunday) {
          textColor = "red";
        } else if (dayWeather.day.isSaturday) {
          textColor = "blue";
        }

        return (
          <li className="block--day" key={dayWeather.day.date} >
            <h4 className="c-title__weather" style={{ color: textColor }}>
              {dayWeather.day.date.month}{dayWeather.day.date.day}<br />{dayWeather.day.date.dayOfWeek}
            </h4>
            {dayWeather.day.isHoliday && (
              <p>
                {displayDate}
              </p>
            )}
            <p className="weather__name">
              {dayWeather.name}
            </p>
            <span className="weather__img">
              <img src={dayWeather.image} alt="Weather Icon" />
            </span>
            {dayWeather.highestTemperature && dayWeather.lowestTemperature && dayWeather.maximumTemperatureComparison && dayWeather.lowestTemperatureComparison && (
              <Temp weather={dayWeather} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default WeekWeather;

