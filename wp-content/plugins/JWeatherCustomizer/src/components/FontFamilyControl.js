// FontFamilyControl.js
import { SelectControl } from '@wordpress/components';

function FontFamilyControl({ fontFamily, setFontFamily }) {
  const handleOnChange = (newFontFamily) => {
    setFontFamily(newFontFamily);
  };

  return (
    <SelectControl
      label="フォントファミリーを選択"
      value={fontFamily}
      options={[
        { label: 'Noto Sans JP', value: "NotoSans, sans-serif" },
        { label: 'Noto Serif JP', value: "NotoSerif, serif" },
        { label: 'M PLUS 1p', value: "MPLUS1, sans-serif" },
        { label: 'Kosugi Maru', value: "KosugiMaru, sans-serif" },
        { label: 'Sawarabi Gothic', value: "SawarabiGothic, sans-serif" }
      ]}
      onChange={handleOnChange}
    />
  );
}

export default FontFamilyControl;
