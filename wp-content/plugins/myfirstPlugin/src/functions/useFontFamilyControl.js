import { useState, useEffect } from '@wordpress/element';

export function useFontFamilyControl(attributes, setAttributes) {
  const [fontFamily, setFontFamily] = useState(attributes.fontFamily);

  useEffect(() => {
    setFontFamily(attributes.fontFamily);
  }, [attributes.fontFamily]);

  const onChangeFontFamily = (newFontFamily) => {
    setFontFamily(newFontFamily);
    setAttributes({ fontFamily: newFontFamily });
  }

  return {
    fontFamily,
    onChangeFontFamily
  };
}

