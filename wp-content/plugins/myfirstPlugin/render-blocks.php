<?php

// Helper function to set text color based on day properties
function setTextColor($day)
{
  if (($day['isHoliday'] ?? false) || ($day['isSunday'] ?? false)) {
    return ' style="color: red"';
  } elseif ($day['isSaturday'] ?? false) {
    return ' style="color: blue"';
  }
  return '';
}

function myfirstplugin_render_block($attr, $content)
{
  $weather_data = json_decode(get_option('my_weather_data'), true);

  // 1. オプションデータの取得デバッグ
  error_log('Debug: Weather Data - ' . print_r($weather_data, true));

  // 天気データがnullかチェック
  if ($weather_data === null) {
    return '天気データが取得できませんでした。';
  }

  if (!is_array($weather_data)) {
    return '天気データのフォーマットが不正です。';
  }

  // Attribute Defaults
  $todayWeather = $attr['todayWeather'] ?? null;
  $tomorrowWeather = $attr['tomorrowWeather'] ?? null;
  $weeklyWeather = $attr['weeklyWeather'] ?? null;
  $showHoliday = $attr['showHoliday'] ?? null;
  $showPrecipitation = $attr['showPrecipitation'] ?? null;

  $output = '<div class="wp-block-create-block-my-first-plugin"><div class="layout"><div class="today-and-tomorrow weather-layout">';

  $time_ranges = ['0-6時', '6-12時', '12-18時', '18-24時'];

  if ($todayWeather && isset($weather_data[0])) {
    $textColor = setTextColor($weather_data[0]['day'] ?? []);
    $output .= generateWeatherOutput($weather_data[0], $textColor, $time_ranges, $showHoliday, $showPrecipitation, __('今日の天気', 'myfirstPlugin'));
  }

  if ($tomorrowWeather && isset($weather_data[1])) {
    $textColor = setTextColor($weather_data[1]['day'] ?? []);
    $output .= generateWeatherOutput($weather_data[1], $textColor, $time_ranges, $showHoliday, $showPrecipitation, __('明日の天気', 'myfirstPlugin'));
  }

  $output .= '</div>';

  if ($weeklyWeather) {
    $output .= '<ul class="block--weekly weather-layout">';

    for ($i = 2; $i <= 6; $i++) {
      if (isset($weather_data[$i])) {
        $textColor = setTextColor($weather_data[$i]['day'] ?? []);
        $output .= generateWeeklyWeatherOutput($weather_data[$i], $textColor);
      }
    }

    $output .= '</ul>';
  }

  $output .= '</div></div>';

  return $output;
}

function generateWeatherOutput($data, $textColor, $time_ranges, $showHoliday, $showPrecipitation, $title)
{
  $output = '<div class="block--current">';
  $output .= '<h3>' . $title . '</h3>';
  $output .= '<h4' . $textColor . '>'  . ($data['day']['date'] ?? '') . '</h4>';
  $output .= '<span class="c-weather__weather">';
  $output .= "<img src=\"{$data['image']}\" alt=\"weather icon\">";
  $output .= '</span>';
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
  if ($showHoliday) {
    $output .= '<p>' . esc_html($data['day']['date'] ?? '') . '</p>';
  }
  if ($showPrecipitation && isset($data['rainProbability']) && is_array($data['rainProbability'])) {
    $output .= '<ul class="time-zone">';
    $output .= '<li class="c-weather__chanceOfRain-index"><p class="time">時間</p><p class="rain">降水</p></li>';
    for ($i = 0; $i < 4; $i++) {
      $output .= '<li class="c-weather__chanceOfRain-timezone' . ($i + 1) . '">';
      $output .= '<p class="time">' . $time_ranges[$i] . '</p>';
      $output .= '<p class="rain">' . ($data['rainProbability'][$i] ?? '') . '</p>';
      $output .= '</li>';
    }
    $output .= '</ul>';
  }
  $output .= '</div>';

  return $output;
}

function generateWeeklyWeatherOutput($data, $textColor)
{
  $output = '<li class="block--day">';
  $output .= '<h4' . $textColor . '>' . ($data['day']['date'] ?? '') . '</h4>';
  $output .= '<span class="c-weather__weather">';
  $output .= "<img src=\"{$data['image']}\" alt=\"weather icon\">";
  $output .= '</span>';
  $output .= '<ul class="temp">';
  $output .= '<li>';
  $output .= '<p>' . ($data['highestTemperature'] ?? '') . '<span class="celsius">℃</span></p>';
  $output .= '</li>';
  $output .= '<li>';
  $output .= '<p>' . ($data['lowestTemperature'] ?? '') . '<span class="celsius">℃</span></p>';
  $output .= '</li>';
  $output .= '</ul>';
  $output .= '</li>';

  return $output;
}

// function myfirstplugin_render_block($attr, $content)
// {

//   // 天気データがnullかチェック
//   if (get_option('my_weather_data') === null) {
//     return '天気データが取得できませんでした。';
//   }

//   for ($i = 0; $i <= 6; $i++) {
//     // 保存された天気データを取得
//     $weather_data = json_decode(get_option('my_weather_data'), true);

//     if (!is_array($weather_data)) {
//       return '天気データのフォーマットが不正です。';
//   }

//     $todayWeather = isset($attr['todayWeather']) ? $attr['todayWeather'] : null;
//     $tomorrowWeather = isset($attr['tomorrowWeather']) ? $attr['tomorrowWeather'] : null;
//     $weeklyWeather = isset($attr['weeklyWeather']) ? $attr['weeklyWeather'] : null;
//     $showHoliday = isset($attr['showHoliday']) ? $attr['showHoliday'] : null;
//     $showPrecipitation = isset($attr['showPrecipitation']) ? $attr['showPrecipitation'] : null;
//     $textColor = '';

//     // データを基に何らかのHTMLを生成
//     $output = '';
//     $output = '<div class="wp-block-create-block-my-first-plugin"><div class="layout"><div class="today-and-tomorrow weather-layout">';
//     if ($todayWeather) {

//       if (isset($weather_data[0]['day']['isHoliday']) && $weather_data[0]['day']['isHoliday'] || isset($weather_data[0]['day']['isSunday']) && $weather_data[0]['day']['isSunday']) {
//         $textColor = ' style="color: red"';
//       } elseif (isset($weather_data[0]['day']['isSaturday']) && $weather_data[0]['day']['isSaturday']) {
//         $textColor = ' style="color: blue"';
//       }

//       $output .= '<div class="block--current">';
//       $output .= '<h3>' . __('今日の天気', 'myfirstPlugin') . '</h3>';
//       $output .= '<h4' . $textColor . '>'  . $weather_data[0]['day']['date'] . '</h4>';
//       $output .= '<span class="c-weather__weather">';
//       $output .= "<img src=\"{$weather_data[0]['image']}\" alt=\"weather icon\">";
//       $output .= '</span>';
//       $output .= '<ul class="temp">';
//       $output .= '<li>';
//       $output .= '<p>' . $weather_data[0]['highestTemperature'] . '<span class="celsius">℃</span></p>';
//       $output .= '<p>' . $weather_data[0]['maximumTemperatureComparison'] . '</p>';
//       $output .= '</li>';
//       $output .= '<li>';
//       $output .= '<p>' . $weather_data[0]['lowestTemperature'] . '<span class="celsius">℃</span></p>';
//       $output .= '<p>' . $weather_data[0]['lowestTemperatureComparison'] . '</p>';
//       $output .= '</li>';
//       $output .= '</ul>';
//       if ($showHoliday) {
//         if (isset($weather_data['day']) && isset($weather_data['day'][0]['date'])) {
//           echo esc_html($weather_data['day'][0]['date']);
//         }
//       }
//       if ($showPrecipitation) {
//         if (isset($weather_data[0]['rainProbability']) && is_array($weather_data[0]['rainProbability'])) {
//           $output .= '<ul class="time-zone">';
//           $output .= '<li class="c-weather__chanceOfRain-index"><p class="time">時間</p><p class="rain">降水</p></li>';
//           for ($i = 0; $i < 4; $i++) {
//             $time_ranges = ['0-6時', '6-12時', '12-18時', '18-24時'];
//             $output .= '<li class="c-weather__chanceOfRain-timezone' . ($i + 1) . '">';
//             $output .= '<p class="time">' . $time_ranges[$i] . '</p>';
//             $output .= '<p id="todayschanceOfRain' . ($i + 1) . '" class="rain">';
//             $output .= esc_html($weather_data[0]['rainProbability'][$i] ?? '');
//             $output .= '</p>';
//             $output .= '</li>';
//           }
//           $output .= '</ul>';
//         }
//       }
//       $output .= '</div>';
//     }
//     // echo '<pre>';
//     // print_r($weather_data);
//     // echo '</pre>';


//     $textColor = '';

//     if ($tomorrowWeather) {

//       if (isset($weather_data[1]['day']['isHoliday']) && $weather_data[1]['day']['isHoliday'] || isset($weather_data[1]['day']['isSunday']) && $weather_data[1]['day']['isSunday']) {
//         $textColor = ' style="color: red"';
//       } elseif (isset($weather_data[1]['day']['isSaturday']) && $weather_data[1]['day']['isSaturday']) {
//         $textColor = ' style="color: blue"';
//       }

//       $output .= '<div class="block--current">';
//       $output .= '<h3>' . __('明日の天気', 'myfirstPlugin') . '</h3>';
//       $output .= '<h4' . $textColor . '>' . $weather_data[1]['day']['date'] . '</h4>';
//       $output .= "<img src=\"{$weather_data[1]['image']}\" alt=\"weather icon\">";
//       $output .= '<ul class="temp">';
//       $output .= '<li>';
//       $output .= '<p>' . $weather_data[1]['highestTemperature'] . '<span class="celsius">℃</span></p>';
//       $output .= '<p>' . $weather_data[1]['maximumTemperatureComparison'] . '</p>';
//       $output .= '</li>';
//       $output .= '<li>';
//       $output .= '<p>' . $weather_data[1]['lowestTemperature'] . '<span class="celsius">℃</span></p>';
//       $output .= '<p>' . $weather_data[1]['lowestTemperatureComparison'] . '</p>';
//       $output .= '</li>';
//       $output .= '</ul>';
//       if ($showHoliday) {
//         if (isset($weather_data['day']) && isset($weather_data['day'][1]['date'])) {
//           echo esc_html($weather_data['day'][1]['date']);
//         }
//       }
//       if ($showPrecipitation) {
//         if (isset($weather_data[1]['rainProbability']) && is_array($weather_data[1]['rainProbability'])) {
//           $output .= '<ul class="time-zone">';
//           $output .= '<li class="c-weather__chanceOfRain-index"><p class="time">時間</p><p class="rain">降水</p></li>';
//           for ($i = 0; $i < 4; $i++) {
//             $time_ranges = ['0-6時', '6-12時', '12-18時', '18-24時'];
//             $output .= '<li class="c-weather__chanceOfRain-timezone' . ($i + 1) . '">';
//             $output .= '<p class="time">' . $time_ranges[$i] . '</p>';
//             $output .= '<p id="todayschanceOfRain' . ($i + 1) . '" class="rain">';
//             $output .= esc_html($weather_data[1]['rainProbability'][$i] ?? '');
//             $output .= '</p>';
//             $output .= '</li>';
//           }
//           $output .= '</ul>';
//         }
//       }
//       $output .= '</div>';
//     }
//     $output .= '</div>';

//     if ($weeklyWeather) {
//       $output .= '<ul class="block--weekly weather-layout">';

//       for ($i = 2; $i <= 6; $i++) {
//         if (isset($weather_data[$i]['day']['isHoliday']) && $weather_data[$i]['day']['isHoliday'] || isset($weather_data[$i]['day']['isSunday']) && $weather_data[$i]['day']['isSunday']) {
//           $textColor = ' style="color: red"';
//         } elseif (isset($weather_data[$i]['day']['isSaturday']) && $weather_data[$i]['day']['isSaturday']) {
//           $textColor = ' style="color: blue"';
//         } else {
//           $textColor = ''; // その他の日には何もスタイルを設定しない
//         }
//         $output .= '<li class="block--day">';
//         $output .= '<h4' . $textColor . '>' . $weather_data[$i]['day']['date'] . '</h4>';
//         $output .= '<p class="c-title__weather">' . $weather_data[$i]['name'] . '</p>';
//         $output .= '<span class="c-weather__weather">';
//         $output .= "<img src=\"{$weather_data[$i]['image']}\" alt=\"weather icon\">";
//         $output .= '</span>';
//         $output .= '<ul class="temp">'; // 修正: classNameをclassに変更しました
//         $output .= '<li>';
//         $output .= '<p>' . $weather_data[$i]['highestTemperature'] . '<span class="celsius">℃</span></p>';
//         $output .= '<p>' . $weather_data[$i]['maximumTemperatureComparison'] . '</p>';
//         $output .= '</li>';
//         $output .= '<li>';
//         $output .= '<p>' . $weather_data[$i]['lowestTemperature'] . '<span class="celsius">℃</span></p>';
//         $output .= '<p>' . $weather_data[$i]['lowestTemperatureComparison'] . '</p>';
//         $output .= '</li>';
//         $output .= '</ul>';
//         $output .= '</li>';
//       }

//       $output .= '</ul>';
//     }

//     $output .= '</div></div>';
//   }

//   return $output;
// }
