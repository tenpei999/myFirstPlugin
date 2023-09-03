const Temp = ({ weather }) => {

  if (!weather) return null;

  return (
    <ul className="temp">
      <li>
        <p>{weather.highestTemperature}<span className="celsius">℃</span></p>
        <p>{weather.maximumTemperatureComparison}</p>
      </li>
      <li>
        <p>{weather.lowestTemperature}<span className="celsius">℃</span></p>
        <p>{weather.lowestTemperatureComparison}</p>
      </li>
    </ul>
  )
}

export default Temp;