import { useState, useEffect } from '@wordpress/element';

export function useChangeBalance(initialOption, setAttributes) {
  const defaultOption = { label: 'EmphasizeTheWeather', value: "EmphasizeTheWeather" };
  const [selectedOption, setSelectedOption] = useState(initialOption || defaultOption);

  const fontBalanceOptions = [
    defaultOption,
    { label: 'EmphasizeTheTemperature', value: 'EmphasizeTheTemperature' },
    { label: 'Comfortable', value: 'Comfortable' },
    { label: 'data', value: 'data' },
    { label: 'Simple', value: 'Simple' },
  ];

  const applyFontBalance = (option) => {
    fontBalanceOptions.forEach(opt => {
      document.querySelectorAll('.block--current').forEach(article => article.classList.remove(opt.value));
      document.querySelectorAll('.block--weekly').forEach(ul => ul.classList.remove(opt.value));
    });

    if (option.value !== "default") {
      document.querySelectorAll('.block--current').forEach(article => article.classList.add(option.value));
      document.querySelectorAll('.block--weekly').forEach(ul => ul.classList.add(option.value));
    }
  };

  useEffect(() => {
    applyFontBalance(selectedOption);
    setAttributes({ balanceOption: selectedOption.value }); // ここで属性を更新
  }, [selectedOption]);

  return {
    selectedOption,
    setSelectedOption,
    fontBalanceOptions,
    applyFontBalance
  };
}
