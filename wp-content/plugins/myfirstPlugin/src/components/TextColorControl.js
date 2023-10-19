// TextColorControl.js
import { SelectControl } from '@wordpress/components';

function TextColorControl({ textColor, setTextColor }) {
  const handleOnChange = (value) => {
    setTextColor(value);
  };

  return (
    <SelectControl
      label="テキストの色を選択"
      value={textColor}
      options={[
        { label: '黒', value: 'black' },
        { label: '白', value: 'white' },
      ]}
      onChange={handleOnChange}
    />
  );
}

export default TextColorControl;
