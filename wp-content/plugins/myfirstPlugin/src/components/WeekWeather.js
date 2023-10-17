import Temp from './Temp';
import '../editor.scss';
import '../style.scss';

const WeekWeather = ({
  borders,
  borderRadius,
  fontFamily,
  weather,
  styleVariant,
  selectedMedia,
}) => {

  console.log(weather)

  if (!weather) return null;

  console.log(borders)

  const borderStyles = {
    borderTop: `${borders.top.width} ${borders.top.style} ${borders.top.color}`,
    borderRight: `${borders.right.width} ${borders.right.style} ${borders.right.color}`,
    borderBottom: `${borders.bottom.width} ${borders.bottom.style} ${borders.bottom.color}`,
    borderLeft: `${borders.left.width} ${borders.left.style} ${borders.left.color}`
  };

  return (
    <ul className={`block--weekly weather-layout ${styleVariant}`}
      style={{
        ...borderStyles,
        borderRadius: borderRadius,
        fontFamily: fontFamily,
        backgroundImage: selectedMedia ? `url('${selectedMedia}')` : 'none',
        backgroundSize: selectedMedia ? 'cover' : '100%', 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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

