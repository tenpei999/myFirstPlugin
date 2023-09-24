import { useEffect } from '@wordpress/element';
import weatherObject from './weatherObject';
import { city } from './getSpotWeather';
export function useChangeCity(selectedCity, setTodayWeather, setTomorrowWeather, setWeeklyWeather) {
  useEffect(() => {
      async function fetchData() {
          const cityurl = city[selectedCity];
          if (cityurl) {
              await weatherObject(
                  cityurl,
                  setTodayWeather,
                  setTomorrowWeather,
                  setWeeklyWeather,
              );
          } else {
              console.error(`No URL found for city: ${selectedCity}`);
          }
          console.log(cityurl);
      }

      fetchData();
  }, [selectedCity]);
}
