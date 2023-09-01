<?php

function myfirstplugin_render_block($attr, $content)
{
  // 保存された天気データを取得
  $weather_data = json_decode(get_option('my_weather_data'), true);

  $todayWeather = isset($attr['todayWeather']) ? $attr['todayWeather'] : null;
  $tomorrowWeather = isset($attr['tomorrowWeather']) ? $attr['tomorrowWeather'] : null;
  $weeklyWeather = isset($attr['weeklyWeather']) ? $attr['weeklyWeather'] : null;
  $showHoliday = isset($attr['showHoliday']) ? $attr['showHoliday'] : null;
  $showPrecipitation = isset($attr['showPrecipitation']) ? $attr['showPrecipitation'] : null;

  // データを基に何らかのHTMLを生成
  $output = '';
  $output = '<div class="weather-block">';


  if ($todayWeather) {
    $output .= '<div class="today-weather">';
    $output .= '<h3>' . __('今日の天気', 'myfirstPlugin') . '</h3>';
    $output .= '<h4>' . $weather_data[0]['name'] . '</h4>';
    $output .= '<ul className="temp">';
    $output .= '<li>';
    $output .= '<p>' . $weather_data[0]['highestTemperature'] . '<span>℃</span></p>';
    $output .= '<p>' . $weather_data[0]['maximumTemperatureComparison'] . '</p>';
    $output .= '</li>';
    $output .= '<li>';
    $output .= '<p>' . $weather_data[0]['lowestTemperature'] . '<span>℃</span></p>';
    $output .= '<p>' . $weather_data[0]['lowestTemperatureComparison'] . '</p>';
    $output .= '</li>';
    $output .= '</ul>';
    if ($showHoliday) {
      if (isset($weather_data['day']) && isset($weather_data['day'][0]['date'])) {
        echo esc_html($weather_data['day'][0]['date']);
      }
    }
    if ($showPrecipitation) {
      if (isset($weather_data[0]['rainProbability']) && is_array($weather_data[0]['rainProbability'])) {
        $output .= '<ul class="time-zone">';
        $output .= '<li class="c-weather__chanceOfRain-index"><p class="time">時間</p><p class="rain">降水</p></li>';
        for ($i = 0; $i < 4; $i++) {
          $time_ranges = ['0-6時', '6-12時', '12-18時', '18-24時'];
          $output .= '<li class="c-weather__chanceOfRain-timezone' . ($i + 1) . '">';
          $output .= '<p class="time">' . $time_ranges[$i] . '</p>';
          $output .= '<p id="todayschanceOfRain' . ($i + 1) . '" class="rain">';
          $output .= esc_html($weather_data[0]['rainProbability'][$i] ?? '');
          $output .= '</p>';
          $output .= '</li>';
        }
        $output .= '</ul>';
      }
    }
    $output .= '</div>';
  }
  // echo '<pre>';
  // print_r($showPrecipitation);
  // echo '</pre>';

  if ($tomorrowWeather) {
    $output .= '<div class="tomorrow-weather">';
    $output .= '<h3>' . __('明日の天気', 'myfirstPlugin') . '</h3>';
    $output .= '<h4>' . $weather_data[1]['name'] . '</h4>';
    $output .= '<ul className="temp">';
    $output .= '<li>';
    $output .= '<p>' . $weather_data[1]['highestTemperature'] . '<span>℃</span></p>';
    $output .= '<p>' . $weather_data[1]['maximumTemperatureComparison'] . '</p>';
    $output .= '</li>';
    $output .= '<li>';
    $output .= '<p>' . $weather_data[1]['lowestTemperature'] . '<span>℃</span></p>';
    $output .= '<p>' . $weather_data[1]['lowestTemperatureComparison'] . '</p>';
    $output .= '</li>';
    $output .= '</ul>';
    if ($showHoliday) {
      if (isset($weather_data['day']) && isset($weather_data['day'][1]['date'])) {
        echo esc_html($weather_data['day'][1]['date']);
      }
    }
    if ($showPrecipitation) {
      if (isset($weather_data[1]['rainProbability']) && is_array($weather_data[1]['rainProbability'])) {
        $output .= '<ul class="time-zone">';
        $output .= '<li class="c-weather__chanceOfRain-index"><p class="time">時間</p><p class="rain">降水</p></li>';
        for ($i = 0; $i < 4; $i++) {
          $time_ranges = ['0-6時', '6-12時', '12-18時', '18-24時'];
          $output .= '<li class="c-weather__chanceOfRain-timezone' . ($i + 1) . '">';
          $output .= '<p class="time">' . $time_ranges[$i] . '</p>';
          $output .= '<p id="todayschanceOfRain' . ($i + 1) . '" class="rain">';
          $output .= esc_html($weather_data[1]['rainProbability'][$i] ?? '');
          $output .= '</p>';
          $output .= '</li>';
        }
        $output .= '</ul>';
      }
    }
    $output .= '</div>';
  }

  if ($weeklyWeather) {
    $output .= '<div class="weekly-weather">';
    $output .= '<h3>' . __('週間の天気', 'myfirstPlugin') . '</h3>';
    $output .= '</div>';
  }


  $output .= '</div>';
  return $output;
}
