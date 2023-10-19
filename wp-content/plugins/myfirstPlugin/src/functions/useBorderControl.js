import { useState, useEffect } from '@wordpress/element';

export function useBorderControl(attributes, setAttributes) {
  const borderColors = [
    { name: 'Blue 20', color: '#72aee6' },
  ];
  const defaultBorder = {
    color: '#72aee6',
    style: 'dashed',
    width: '1px',
  };
  const [borders, setBorders] = useState(attributes.borders || {
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
  });

  const units = [
    { label: 'Pixels (px)', value: 'px' },
    { label: 'Percentage (%)', value: '%' },
  ];


  const onChangeBorder = (newBorders) => {
    const updatedBorders = {
      top: {
        ...borders.top,
        ...newBorders,
        width: newBorders.width || '0px',
        color: newBorders.color || '#72AEE6',
        style: newBorders.style || 'dashed'
      },
      right: {
        ...borders.right,
        ...newBorders,
        width: newBorders.width || '0px',
        color: newBorders.color || '#72AEE6',
        style: newBorders.style || 'dashed'
      },
      bottom: {
        ...borders.bottom,
        ...newBorders,
        width: newBorders.width || '0px',
        color: newBorders.color || '#72AEE6',
        style: newBorders.style || 'dashed'
      },
      left: {
        ...borders.left,
        ...newBorders,
        width: newBorders.width || '0px',
        color: newBorders.color || '#72AEE6',
        style: newBorders.style || 'dashed'
      }
    };

    setAttributes({ ...attributes, borders: updatedBorders });
    setBorders(updatedBorders);
  };

  useEffect(() => {
    if (attributes.borders) {
      setBorders(attributes.borders);
    }
  }, [attributes.borders]);

  const handleRangeChange = (newValue) => {
    const currentUnit = attributes.borderRadiusValue?.replace(/[0-9]/g, '') || 'px';
    if (!isNaN(newValue)) {
      setAttributes({ ...attributes, borderRadiusValue: `${newValue}${currentUnit}` });
    }
  };

  const handleUnitChange = (newUnit) => {
    const currentValue = parseInt(attributes.borderRadiusValue || '0', 10);
    setAttributes({ ...attributes, borderRadiusValue: `${currentValue}${newUnit}` });
  };

  return {
    borders,
    onChangeBorder,
    handleRangeChange,
    handleUnitChange,
    borderColors,
    units
  };
}
