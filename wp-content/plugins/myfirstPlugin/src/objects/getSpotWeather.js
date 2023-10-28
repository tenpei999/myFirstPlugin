export const cities = {
  // https://open-meteo.com/en/docs
  // Daily Weather Variables Weathercode / Maximum Temperature (2 m) / Minimum Temperature (2 m) / Past days 1

  札幌: {
    name: '札幌',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=43.0667&longitude=141.35&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  秋田: {
    name: '秋田',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=39.7167&longitude=140.1167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  },
  金沢: {
    name: '金沢',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=36.6&longitude=136.6167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  東京: {
    name: '東京',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  大宮: {
    name: '大宮',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=35.9635&longitude=139.8305&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  名古屋: {
    name: '名古屋',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=35.1815&longitude=136.9064&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  南堀江: {
    name: '南堀江',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=34.6711&longitude=135.4942&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  },
  八尾: {
    name: '八尾',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=34.6167&longitude=135.6&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  奈良: {
    name: '奈良',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=34.685&longitude=135.8049&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  朝来: {
    name: '朝来',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=35.2591&longitude=134.8139&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  福岡: {
    name: '福岡',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=33.6&longitude=130.4167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  佐世保: {
    name: '佐世保',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=33.1683&longitude=129.725&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
  諸塚: {
    name: '諸塚',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=32.5601&longitude=131.3198&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  },
  パリ: {
    name: 'パリ',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14'
  },
}

// export const city =  {
//   // https://open-meteo.com/en/docs
//   // Daily Weather Variables Weathercode / Maximum Temperature (2 m) / Minimum Temperature (2 m) / Past days 1

//   札幌: 'https://api.open-meteo.com/v1/forecast?latitude=43.0667&longitude=141.35&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   秋田: 'https://api.open-meteo.com/v1/forecast?latitude=39.7167&longitude=140.1167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   金沢: 'https://api.open-meteo.com/v1/forecast?latitude=36.6&longitude=136.6167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   東京: 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   大宮: 'https://api.open-meteo.com/v1/forecast?latitude=35.9635&longitude=139.8305&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   名古屋: 'https://api.open-meteo.com/v1/forecast?latitude=35.1815&longitude=136.9064&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   南堀江: 'https://api.open-meteo.com/v1/forecast?latitude=34.6711&longitude=135.4942&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   八尾: 'https://api.open-meteo.com/v1/forecast?latitude=34.6167&longitude=135.6&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   奈良: 'https://api.open-meteo.com/v1/forecast?latitude=34.685&longitude=135.8049&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   朝来: 'https://api.open-meteo.com/v1/forecast?latitude=35.2591&longitude=134.8139&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   福岡: 'https://api.open-meteo.com/v1/forecast?latitude=33.6&longitude=130.4167&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   佐世保: 'https://api.open-meteo.com/v1/forecast?latitude=33.1683&longitude=129.725&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   諸塚: 'https://api.open-meteo.com/v1/forecast?latitude=32.5601&longitude=131.3198&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
//   パリ: 'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
// } 