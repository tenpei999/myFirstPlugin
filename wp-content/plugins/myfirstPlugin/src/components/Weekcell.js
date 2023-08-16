import Temp from "./Temp";
import '../editor.scss';

const WeekCell = ({ weather }) => {
  if (!weather) return null;

  return (
    <ul className="layout block--weekly">
      {weather.slice(0, 6).map((dayWeather, index) => {
        if (!dayWeather || !dayWeather.day) return null;

        let textColor;
        if (dayWeather.day.isHoliday || dayWeather.day.isSunday) {
          textColor = "red";
        } else if (dayWeather.day.isSaturday) {
          textColor = "blue";
        }
        return (
          <li key={index} className="block--day">
            <h4 id={`dayAfterTommorow_${index}`} class="c-title__weather" style={{ color: textColor }}>
              {dayWeather.day.date}
            </h4>
            {dayWeather.day.isHoliday && (
              <p id={`dayAfterTommorow_${index}`} >
                {dayWeather.day.holidayName}
              </p>
            )}
            <p id={`dayAfterTommorowWeather_${index}`} class="c-weather__weather">
              {dayWeather.name} {/* 天気名 */}
            </p>
            <span id={`dayAfterTommorowWeatherImg_${index}`} class="c-weather__img">
              <img src={dayWeather.image} alt="Weather Icon" />
            </span>
            {dayWeather.highestTemperature && dayWeather.lowestTemperature && dayWeather.maximumTemperatureComparison && dayWeather.lowestTemperatureComparison && (
              <Temp weather={dayWeather} />
            )}
          </li>
        )
      })}
    </ul>
  );
};

export default WeekCell;
