import Temp from './Temp';
import '../editor.scss';
import '../style.scss';

const WeekWeather = ({ weather, windowWidth }) => {

  if (!weather) return null;
  
  const blockStyle = windowWidth >= 800
  ? { flexDirection: 'row' }
  : { flexDirection: 'column' };
  return (
    <ul className="block--weekly" style={blockStyle}>
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
              {dayWeather.day.date}
            </h4>
            {dayWeather.day.isHoliday && (
              <p >
                {dayWeather.day.holidayName}
              </p>
            )}
            <p className="c-weather__weather">
              {dayWeather.name}
            </p>
            <span className="c-weather__img">
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

