import { createElement } from '@wordpress/element';
import WeekCell from './ weekcell';

const WeekWeather = () => {
  return (
    <section class="p-weather--week u-pb80 u-pt80">
      <div class="l-inner">
        <ul class="p-weather--week__container">
          <WeekCell />
          <WeekCell />
          <WeekCell />
          <WeekCell />
          <WeekCell />
        </ul>
      </div>
    </section>
  )
}

export { WeekWeather };