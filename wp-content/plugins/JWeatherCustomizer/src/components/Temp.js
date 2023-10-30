const Temp = ({ weather }) => {

  if (!weather) return null;

  return (
    <ul className="temp">
      <li className="highestAndComparison">
        <p className="highest">{weather.highestTemperature}<span className="celsius">℃</span></p>
        <p className="comparison">{weather.maximumTemperatureComparison}</p>
      </li>
      <li className="lowestAndComparison">
        <p className="lowest">{weather.lowestTemperature}<span className="celsius">℃</span></p>
        <p className="comparison">{weather.lowestTemperatureComparison}</p>
      </li>
    </ul>
  )
}

export default Temp;