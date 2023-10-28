import { useState, useEffect } from '@wordpress/element';

export function useTextColorControl(attributes, setAttributes) {
  const onChangeTextColor = (newTextColor) => {
    setAttributes({ textColor: newTextColor });
  }

  return {
    onChangeTextColor
  };
}

export default useTextColorControl;
