export const city =  {
  // https://open-meteo.com/en/docs
  // Daily Weather Variables Weathercode / Maximum Temperature (2 m) / Minimum Temperature (2 m) / Past days 1

  sapporo: 'https://api.open-meteo.com/v1/forecast?latitude=43.0667&longitude=141.35&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  akita: 'https://api.open-meteo.com/v1/forecast?latitude=39.7167&longitude=140.1167&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  kanazawa: 'https://api.open-meteo.com/v1/forecast?latitude=36.6&longitude=136.6167&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  tokyo: 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  omiya: 'https://api.open-meteo.com/v1/forecast?latitude=35.9635&longitude=139.8305&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  nagoya: 'https://api.open-meteo.com/v1/forecast?latitude=35.1815&longitude=136.9064&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  minamihorie: 'https://api.open-meteo.com/v1/forecast?latitude=34.6711&longitude=135.4942&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  yao: 'https://api.open-meteo.com/v1/forecast?latitude=34.6167&longitude=135.6&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  nara: 'https://api.open-meteo.com/v1/forecast?latitude=34.685&longitude=135.8049&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  asago: 'https://api.open-meteo.com/v1/forecast?latitude=35.2591&longitude=134.8139&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  fukuoka: 'https://api.open-meteo.com/v1/forecast?latitude=33.6&longitude=130.4167&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  sasebo: 'https://api.open-meteo.com/v1/forecast?latitude=33.1683&longitude=129.725&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  morotsuka: 'https://api.open-meteo.com/v1/forecast?latitude=32.5601&longitude=131.3198&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
  paris: 'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&past_days=1&forecast_days=14',
} 