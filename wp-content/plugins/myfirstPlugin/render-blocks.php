<?php

// Helper function to set text color based on day properties
function setTextColor($day)
{
  error_log('Debug: モヒカン Weather Data - ' . print_r($day, true));
  if (($day['isHoliday'] ?? false) || ($day['isSunday'] ?? false)) {
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
  // error_log('Debug: Weather Data - ' . print_r($weather_data, true));

  // 1. オプションデータの取得デバッグ
  // error_log('Debug: Weather Data - ' . print_r($weather_data, true));

  // 天気データがnullかチェック
  if ($weather_data === null) {
    return '天気データが取得できませんでした。';
  }

  if (!is_array($weather_data)) {
    return '天気データのフォーマットが不正です。';
  }

  error_log('Debug: モケケ Weather Data - ' . print_r($weather_data, true));

  // Attribute Defaults
  $showTodayWeather = $attr['showTodayWeather'] ?? true; // デフォルトはtrue
  $showTomorrowWeather = $attr['showTomorrowWeather'] ?? true; // デフォルトはtrue
  $showWeeklyWeather = $attr['showWeeklyWeather'] ?? true; 
  $showHoliday = $attr['showHoliday'] ?? null;
  $showPrecipitation = $attr['showPrecipitation'] ?? null;
  $borders = $attr['borders'] ?? null;
  $borderRadiusValue = $attr['borderRadiusValue'] ?? null;
  $selectedFontFamily = $attr['fontFamily'] ?? 'Noto Sans JP, sans-serif';
  $selectedColor = $attr['textColor'] ?? 'black';
  $backgroundStyleType = $attr['backgroundStyleType'] ?? 'color';
  $selectedBackgroundImage = $attr['backgroundImage'] ?? 'http://hoge.local/wp-content/uploads/2023/10/IMG_5308-scaled.jpeg';
  $selectedBackgroundGradient = $attr['backgroundGradient'] ?? 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)';
  $selectedBackgroundColor = $attr['backgroundColor'] ?? '#fff';
  $selectedBalance = $attr['balanceOption'] ?? 'EmphasizeTheWeather';


  $colorStyle = 'color: ' . $selectedColor . ';';
  $fontStyle = 'font-family: ' . $selectedFontFamily . ';';
  $backgroundStyles = array(); // 初期化

  switch ($backgroundStyleType) {
    case 'image':
      // 画像が選択されている場合、背景画像として設定
      if ($selectedBackgroundImage) {
        $backgroundStyles[] = 'background-image: url(' . esc_url($selectedBackgroundImage) . ')';
        $backgroundStyles[] = 'background-size: cover';
        $backgroundStyles[] = 'background-repeat: no-repeat';
        $backgroundStyles[] = 'background-position: center';
      }
      break;

    case 'color':
      // グラデーションが選択されている場合、背景として背景色を設定
      if ($selectedBackgroundColor) {
        $backgroundStyles[] = 'background: ' . $selectedBackgroundColor;
      }
      break;

    case 'gradient':
      // グラデーションが選択されている場合、背景として背景グラデーションを設定
      if ($selectedBackgroundGradient) {
        $backgroundStyles[] = 'background: ' . $selectedBackgroundGradient;
      }
      break;

    default:
      // デフォルトの背景設定（必要に応じて）または何も適用しない
      break;
  }

  $backgroundStylesString = implode('; ', $backgroundStyles);

  $commonStyle = generateBorderStyle($borders, $borderRadiusValue) . ' ; ' . $colorStyle . ' ; ' . $backgroundStylesString . ' ; ' . $fontStyle . ' ; ';




  error_log('Debug: Attributes - ' . print_r($attr['balanceOption'], true));
  error_log('Debug: Attributes - ' . print_r($attr, true));


  $output = '<div class="wp-block-create-block-my-first-plugin"><div class="layout"><div class="today-and-tomorrow weather-layout">';

  $time_ranges = ['0-6時', '6-12時', '12-18時', '18-24時'];

  if ($showTodayWeather && isset($weather_data[0])) {
    // error_log('Debug: Today Weather Data - ' . print_r($weather_data[0], true));
    $textColor = setTextColor($weather_data[0]['day'] ?? []);
    $output .= generateWeatherOutput($weather_data[0], $textColor, $time_ranges, $showHoliday, $showPrecipitation, __('今日の天気', 'myfirstPlugin'), $commonStyle, $selectedBalance);
  }

  if ($showTomorrowWeather && isset($weather_data[1])) {
    // error_log('Debug: Tomorrow Weather Data - ' . print_r($weather_data[1], true));
    $textColor = setTextColor($weather_data[1]['day']  ?? []);
    $output .= generateWeatherOutput($weather_data[1], $textColor, $time_ranges, $showHoliday, $showPrecipitation, __('明日の天気', 'myfirstPlugin'), $commonStyle, $selectedBalance);
  }

  $output .= '</div>';

  if ($showWeeklyWeather) {
    $output .= '<ul class="block--weekly weather-layout ' . esc_attr($selectedBalance) . '" style="' . $commonStyle . '">';

    for ($i = 2; $i <= 6; $i++) {
      if (isset($weather_data[$i])) {
        $textColor = setTextColor($weather_data[$i]['day'] ?? []);
        $output .= generateWeeklyWeatherOutput($weather_data[$i], $textColor, $showHoliday);
      }
    }

    $output .= '</ul>';
  }

  $output .= '</div></div>';

  return $output;
}

function generateWeatherOutput($data, $textColor, $time_ranges, $showHoliday, $showPrecipitation, $title, $commonStyle, $selectedBalance)
{
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

function generateWeeklyWeatherOutput($data, $textColor, $showHoliday)
{
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
