import { useEffect, useState } from '@wordpress/element';
import weatherObject from '../objects/weatherObject';

export function useChangeCity(selectedCity) {
  // 天気データを状態として保存します。
  const [weatherData, setWeatherData] = useState({
    today: null,
    tomorrow: null,
    weekly: null,
  });

  useEffect(() => {
    async function fetchData() {
      if (!selectedCity || !selectedCity.url) {
        console.error(`No URL found for city: ${selectedCity ? selectedCity.name : "Unknown city"}`);
        return; // selectedCityオブジェクトがない、またはURLがない場合、ここで処理を終了します。
      }

      // 'selectedCity'が存在し、URLが含まれている場合、以下の処理を行います。
      const cityUrl = selectedCity.url;

      await weatherObject(
        cityUrl,
        (todayWeather) => {
          setWeatherData((prevData) => ({
            ...prevData,
            today: todayWeather,
          }));
        },
        (tomorrowWeather) => {
          setWeatherData((prevData) => ({
            ...prevData,
            tomorrow: tomorrowWeather,
          }));
        },
        (weeklyWeather) => {
          setWeatherData((prevData) => ({
            ...prevData,
            weekly: weeklyWeather,
          }));
        },
      );
    }

    fetchData();
  }, [selectedCity]); 
  return weatherData;
}
