import { useState } from '@wordpress/element';
import { useWeatherData } from "../functions/useWeatherData";

export const createVisibilitySettings = ({ 
  attributes, 
  setAttributes, 
  setTodayWeather,

}) => {

  const cachedWeather = useWeatherData(setAttributes);
  const [showHoliday, setShowHoliday] = useState(attributes.showHoliday);
	const [showPrecipitation, setShowPrecipitation] = useState(attributes.showPrecipitation);

  return [
    {
      key: 'todayWeather',
      label: '今日の天気を表示',
      checked: attributes.todayWeather !== null,
      onChange: (checked) => {
        if (checked) {
          setAttributes({ todayWeather: cachedWeather.today });
          setTodayWeather(cachedWeather.today);
        } else {
          setAttributes({ todayWeather: null });
          setTodayWeather(null);
        }
      }
    },
    {
      key: 'tomorrowWeather',
      label: '明日の天気を表示',
      checked: attributes.tomorrowWeather !== null,
      onChange: (checked) => setAttributes({ tomorrowWeather: checked ? cachedWeather.tomorrow : null })
    },
    {
      key: 'weeklyWeather',
      label: '週間天気を表示',
      checked: attributes.weeklyWeather !== null,
      onChange: (checked) => setAttributes({ weeklyWeather: checked ? cachedWeather.weekly : null })
    },
    {
      key: 'showHoliday',
      label: '祝日を表示',
      checked: attributes.showHoliday,
      onChange: (checked) => {
        setShowHoliday(checked);
        setAttributes({ showHoliday: checked });
      }
    },
    {
      key: 'showPrecipitation',
      label: '降水確率を表示',
      checked: attributes.showPrecipitation,
      onChange: (checked) => {
        setShowPrecipitation(checked);
        setAttributes({ showPrecipitation: checked });
      }
    },
  ];
};