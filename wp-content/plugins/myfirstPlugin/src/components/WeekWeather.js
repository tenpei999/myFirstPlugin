import WeekCell from './Weekcell';

const WeekWeather = ({ weather }) => {

  if (!weather) return null;

  return (
    <section class="p-weather--week u-pb80 u-pt80">
      <div class="l-inner">
        <WeekCell weather={weather} />
      </div>
    </section>
  )
}

export { WeekWeather };