const Temp = () => {
  
  return (
    <ul class="c-weather__temp--wrapper">
      <li class="c-weather__temp--left">
        <p class="max"><span id="todaysTempMax"></span><span class="celsius">℃</span></p>
        <p id="DBRTodaysMax" class="dbr-max"></p>
      </li>
      <li class="c-weather__temp--right">
        <p class="min"><span id="todaysTempMin"></span><span class="celsius">℃</span></p>
        <p id="DBRTodayMin" class="dbr-min"></p>
      </li>
    </ul>
  )
}

export default Temp;