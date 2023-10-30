import { useState, useEffect } from '@wordpress/element';
import weatherObject from '../objects/weatherObject';

export const useWeatherData = (setAttributes, addBreak = false) => {
    const [cachedWeather, setCachedWeather] = useState({
        today: null,
        tomorrow: null,
        weekly: null,
    });

    useEffect(() => {
        // `cachedWeather` に基づいて属性を更新
        if (cachedWeather.today) {
            setAttributes({ todayWeather: cachedWeather.today });
        }
        if (cachedWeather.tomorrow) {
            setAttributes({ tomorrowWeather: cachedWeather.tomorrow });
        }
        if (cachedWeather.weekly && cachedWeather.weekly.length > 0) {
            setAttributes({ weeklyWeather: cachedWeather.weekly });
        }
    }, [cachedWeather, setAttributes]);

    useEffect(() => {
        const cityurl = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14';
        weatherObject(
            cityurl,
            (todayData) => {
                setCachedWeather(prev => ({ ...prev, today: todayData }));
                setAttributes({
                    todayWeather: todayData,
                    showHoliday: todayData.day.isHoliday,
                    showPrecipitation: todayData.rainProbability,
                });
            },
            (tomorrowData) => {
                setCachedWeather(prev => ({ ...prev, tomorrow: tomorrowData }));
                setAttributes({
                    tomorrowWeather: tomorrowData,
                    showHoliday: tomorrowData.day.isHoliday,
                    showPrecipitation: tomorrowData.rainProbability
                });
            },
            (weeklyData) => {
                const weeklyHolidays = weeklyData.map(data => data.day);
                setCachedWeather(prev => ({ ...prev, weekly: weeklyData }));
                setAttributes({
                    weeklyWeather: weeklyData,
                    showHoliday: weeklyHolidays,
                });
            },
            addBreak 
        );
    }, [setAttributes, addBreak ]);

    return cachedWeather;
};
