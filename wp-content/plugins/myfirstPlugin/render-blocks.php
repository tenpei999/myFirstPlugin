<?php
// render-blocks.php

function myfirstplugin_render_block($attr, $content)
{
  $todayWeather = isset($attr['todayWeather']) ? $attr['todayWeather'] : null;
  $tomorrowWeather = isset($attr['tomorrowWeather']) ? $attr['tomorrowWeather'] : null;
  $weeklyWeather = isset($attr['weeklyWeather']) ? $attr['weeklyWeather'] : null;
  $showHoliday = isset($attr['showHoliday']) ? $attr['showHoliday'] : null;
  $showPrecipitation = isset($attr['showPrecipitation']) ? $attr['showPrecipitation'] : null;

  $output = '<div class="weather-block">';


  if ($todayWeather) {
    $output .= '<div class="today-weather">';
    $output .= '<h3>' . __('今日の天気', 'myfirstPlugin') . '</h3>';
    $output .= '</div>';
  }

  if ($tomorrowWeather) {
    $output .= '<div class="tomorrow-weather">';
    $output .= '<h3>' . __('明日の天気', 'myfirstPlugin') . '</h3>';
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
