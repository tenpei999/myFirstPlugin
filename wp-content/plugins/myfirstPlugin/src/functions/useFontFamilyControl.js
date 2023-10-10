import { useState, useEffect } from '@wordpress/element';

export function useFontFamilyControl(attributes, setAttributes) {
  const [fontFamily, setFontFamily] = useState(attributes.fontFamily);

  useEffect(() => {
    console.log("Attributes Font Family Updated:", attributes.fontFamily);
    setFontFamily(attributes.fontFamily);
  }, [attributes.fontFamily]);

  const onChangeFontFamily = (newFontFamily) => {
    console.log("New Font Family:", newFontFamily);
    setFontFamily(newFontFamily);
    setAttributes({ fontFamily: newFontFamily });
  }

  return {
    fontFamily,
    onChangeFontFamily
  };
}

