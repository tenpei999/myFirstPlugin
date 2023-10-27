export const createVisibilitySettings = ({ attributes, setAttributes }) => {
  const {
    showTomorrowWeather,
    showWeeklyWeather,
    showTodayWeather,
    showHoliday,
    showPrecipitation,
  } = attributes;

  return [
    {
      label: "今日の天気を表示",
      checked: attributes.showTodayWeather, // 属性から現在の値を取得
      onChange: (isChecked) => {
        // 'showTodayWeather' 属性を更新
        setAttributes({ showTodayWeather: isChecked });
      },
    }, ,
    {
      label: '明日の天気を表示',
      checked: attributes.showTomorrowWeather,
      onChange: (isChecked) => {
        // 'showTodayWeather' 属性を更新
        setAttributes({ showTomorrowWeather: isChecked });
      },
    },
    {
      label: '週間天気を表示',
      checked: attributes.showWeeklyWeather,
      onChange: (isChecked) => {
        // 'showTodayWeather' 属性を更新
        setAttributes({ showWeeklyWeather: isChecked });
      },
    },
    {
      label: '祝日を表示',
      checked: attributes.showHoliday,
      onChange: (checked) => {

        setAttributes({ showHoliday: checked });
      }
    },
    {
      label: '降水確率を表示',
      checked: attributes.showPrecipitation,
      onChange: (checked) => {

        setAttributes({ showPrecipitation: checked });
      }
    },
  ];
};