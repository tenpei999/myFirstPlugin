import { useState, useEffect } from '@wordpress/element';
import weatherObject from './weatherObject';

export const useWeatherData = (setAttributes) => {
    const [cachedWeather, setCachedWeather] = useState({
        today: null,
        tomorrow: null,
        weekly: null,
        holiday: null,
        precipitation: null,
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
            },
            (holidayData) => {
                setCachedWeather(prev => ({ ...prev, holiday: holidayData }));
                setAttributes({ showHoliday: holidayData });
            },
            (precipitationData) => {
                setCachedWeather(prev => ({ ...prev, precipitation: precipitationData }));
                setAttributes({ showPrecipitation: precipitationData });
            }
            );
        }, [setAttributes]);
        console.log(cachedWeather);

    return cachedWeather;
};
