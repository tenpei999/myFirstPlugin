const Temp = ({ weather }) => {

  if (!weather) return null;

  return (
    <ul className="temp">
      <li>
        <p>{weather.highestTemperature}<span>℃</span></p>
        <p>{weather.maximumTemperatureComparison}</p>
      </li>
      <li>
        <p>{weather.lowestTemperature}<span>℃</span></p>
        <p>{weather.lowestTemperatureComparison}</p>
      </li>
    </ul>
  )
}

export default Temp;