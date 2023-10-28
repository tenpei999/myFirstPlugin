<?php

function setTextColor($day)
{
  if ($day['isHoliday'] ?? false || $day['isSunday'] ?? false) {
    return ' style="color: red"';
  } elseif ($day['isSaturday'] ?? false) {
    return ' style="color: blue"';
  }
  return '';
}

function generateBorderStyle($borders, $borderRadiusValue)
{
  $styles = [];

  if ($borders) {
    foreach ($borders as $side => $border) {
      $styles[] = "border-{$side}: {$border['width']} {$border['style']} {$border['color']}";
    }
  }

  if ($borderRadiusValue) {
    $styles[] = "border-radius: {$borderRadiusValue}";
  }

  return implode('; ', $styles);
}

function myfirstplugin_render_block($attr, $content)
{
  $weather_data = json_decode(get_option('my_weather_data'), true);

  if ($weather_data === null) {
    return '天気データが取得できませんでした。';
  }

  if (!is_array($weather_data)) {
    return '天気データのフォーマットが不正です。';
  }

  $output = '<div class="wp-block-create-block-my-first-plugin"><div class="layout"><div class="today-and-tomorrow weather-layout">';

  $time_ranges = ['0-6時', '6-12時', '12-18時', '18-24時'];

  $commonStyle = generateBorderStyle($attr['borders'] ?? null, $attr['borderRadiusValue'] ?? null)
    . ' ; color: ' . ($attr['textColor'] ?? 'black') . ';'
    . ' ; font-family: ' . ($attr['fontFamily'] ?? 'Noto Sans JP, sans-serif') . ';';

  $showTodayWeather = $attr['showTodayWeather'] ?? true;
  $showTomorrowWeather = $attr['showTomorrowWeather'] ?? true;
  $showWeeklyWeather = $attr['showWeeklyWeather'] ?? true;
  $showHoliday = $attr['showHoliday'] ?? null;
  $showPrecipitation = $attr['showPrecipitation'] ?? null;
  $selectedBalance = $attr['balanceOption'] ?? 'EmphasizeTheWeather';

  if ($showTodayWeather && isset($weather_data[0])) {
    $output .= generateWeatherOutput($weather_data[0], '今日の天気', $commonStyle, $time_ranges, $showHoliday, $showPrecipitation, $selectedBalance);
  }

  if ($showTomorrowWeather && isset($weather_data[1])) {
    $output .= generateWeatherOutput($weather_data[1], '明日の天気', $commonStyle, $time_ranges, $showHoliday, $showPrecipitation, $selectedBalance);
  }

  $output .= '</div>';

  if ($showWeeklyWeather) {
    $output .= '<ul class="block--weekly weather-layout ' . esc_attr($selectedBalance) . '" style="' . $commonStyle . '">';
    for ($i = 2; $i <= 6; $i++) {
      if (isset($weather_data[$i])) {
        $output .= generateWeeklyWeatherOutput($weather_data[$i], $commonStyle, $showHoliday);
      }
    }
    $output .= '</ul>';
  }

  $output .= '</div></div>';
  return $output;
}

function generateWeatherOutput($data, $title, $commonStyle, $time_ranges, $showHoliday, $showPrecipitation, $selectedBalance)
{
  $textColor = setTextColor($data['day'] ?? []);
  $output = '<div class="block--current ' . esc_attr($selectedBalance) . '" style="' . $commonStyle . '">';
  $output .= '<h3>' . $title . '</h3>';
  $output .= '<h4' . $textColor . '>' . ($data['day']['date']['month'] ?? '') . ($data['day']['date']['day'] ?? '') . '<br/>' . ($data['day']['date']['dayOfWeek']  ?? '') . '</h4>';

  if ($showHoliday) {
    $output .= '<p>' . esc_html($data['day']['holidayName'] ?? '') . '</p>';
  }

  $output .= '<p class="weather__name">' . ($data['name'] ?? '')  . '</p>';
  $output .= "<img src=\"{$data['image']}\" alt=\"weather icon\">";
  $output .= '<ul class="temp">';
  $output .= '<li class="highestAndComparison">';
  $output .= '<p class="highest">' . ($data['highestTemperature'] ?? '') . '<span class="celsius">℃</span></p>';
  $output .= '<p class="comparison">' . ($data['maximumTemperatureComparison'] ?? '') . '</p>';
  $output .= '</li>';
  $output .= '<li class="lowestAndComparison">';
  $output .= '<p class="lowest">' . ($data['lowestTemperature'] ?? '') . '<span class="celsius">℃</span></p>';
  $output .= '<p class="comparison">' . ($data['lowestTemperatureComparison'] ?? '') . '</p>';
  $output .= '</li>';
  $output .= '</ul>';

  if ($showPrecipitation && isset($data['rainProbability']) && is_array($data['rainProbability'])) {
    $output .= '<ul class="time-zone">';
    $output .= '<li class="c-weather__chanceOfRain-index"><p class="time">時間</p><p class="rain">降水</p></li>';

    for ($i = 0; $i < 4; $i++) {
      $output .= '<li class="c-weather__chanceOfRain-timezone' . ($i + 1) . '">';
      $output .= '<p class="time">' . $time_ranges[$i] . '</p>';
      $output .= '<p class="rain">' . ($data['rainProbability'][$i]['precipitation_probability'] ?? '') . '%</p>';
      $output .= '</li>';
    }

    $output .= '</ul>';
  }

  $output .= '</div>';
  return $output;
}

function generateWeeklyWeatherOutput($data, $commonStyle, $showHoliday)
{
  $textColor = setTextColor($data['day'] ?? []);
  $output = '<li class="block--day">';
  $output .= '<h4' . $textColor . '>' . ($data['day']['date']['month'] ?? '') . ($data['day']['date']['day'] ?? '') . '<br/>' . ($data['day']['date']['dayOfWeek']  ?? '') . '</h4>';

  if ($showHoliday) {
    $output .= '<p>' . esc_html($data['day']['holidayName'] ?? '') . '</p>';
  }

  $output .= '<p class="weather__name">' . ($data['name'] ?? '')  . '</p>';
  $output .= "<img src=\"{$data['image']}\" alt=\"weather icon\">";
  $output .= '<ul class="temp">';
  $output .= '<li>';
  $output .= '<p>' . ($data['highestTemperature'] ?? '') . '<span class="celsius">℃</span></p>';
  $output .= '<p>' . ($data['maximumTemperatureComparison'] ?? '') . '</p>';
  $output .= '</li>';
  $output .= '<li>';
  $output .= '<p>' . ($data['lowestTemperature'] ?? '') . '<span class="celsius">℃</span></p>';
  $output .= '<p>' . ($data['lowestTemperatureComparison'] ?? '') . '</p>';
  $output .= '</li>';
  $output .= '</ul>';
  $output .= '</li>';

  return $output;
}
