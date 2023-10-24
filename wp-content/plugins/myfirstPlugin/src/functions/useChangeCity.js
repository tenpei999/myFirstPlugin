import { useEffect } from '@wordpress/element';
import weatherObject from '../objects/weatherObject';

// useChangeCity関数内での修正:
export function useChangeCity(selectedCity, setTodayWeather, setTomorrowWeather, setWeeklyWeather) {
  useEffect(() => {
    console.log(selectedCity)
    async function fetchData() {
      if (!selectedCity || !selectedCity.url) {
        console.error(`No URL found for city: ${selectedCity ? selectedCity.name : "Unknown city"}`);
        return; // selectedCityオブジェクトがない、またはURLがない場合、ここで処理を終了します。
      }
    
      // 'selectedCity'が存在し、URLが含まれている場合、以下の処理を行います。
      const cityUrl = selectedCity.url;
    
      await weatherObject(
        cityUrl,
        setTodayWeather,
        setTomorrowWeather,
        setWeeklyWeather,
      );
    }

    fetchData();
  }, [selectedCity]); // 'selectedCity'オブジェクトの変更に応じてフックを再実行します。
}
