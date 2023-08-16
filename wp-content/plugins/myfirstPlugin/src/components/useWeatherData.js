import { useState, useEffect } from '@wordpress/element';
import weatherObject from '../hooks/weatherObject';

export const useWeatherData = (setAttributes) => {
    const [cachedWeather, setCachedWeather] = useState({
        today: null,
        tomorrow: null,
        weekly: null
    });

    useEffect(() => {
        weatherObject(
            (todayData) => {
                setCachedWeather(prev => ({ ...prev, today: todayData }));
                setAttributes({ todayWeather: todayData });
            },
            (tomorrowData) => {
                setCachedWeather(prev => ({ ...prev, tomorrow: tomorrowData }));
                setAttributes({ tomorrowWeather: tomorrowData });
            },
            (weeklyData) => {
                setCachedWeather(prev => ({ ...prev, weekly: weeklyData }));
                setAttributes({ weeklyWeather: weeklyData });
            }
        );
    }, [setAttributes]);

    return cachedWeather;
};
