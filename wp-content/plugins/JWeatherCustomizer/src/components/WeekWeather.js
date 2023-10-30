import Temp from './Temp';
import useBorderStyles from '../functions/useBorderStyles';
import useBackgroundStyles from '../functions/useBackgroundStyles';
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

  const borderStyles = useBorderStyles(borders);
  const backgroundStyles = useBackgroundStyles(backgroundStyleType, selectedMedia, backgroundColor, backgroundGradient);

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

