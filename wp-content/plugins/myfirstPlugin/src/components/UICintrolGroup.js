import { SelectControl } from '@wordpress/components';
import FontFamilyControl from './FontFamilyControl';
import TextColorControl from './TextColorControl';
import BackgroundSelector from './BackgroundSelector';
import BorderControlGroup from './BorderControlGroup';

const UIControlGroup = ({
  fontFamily,
  onChangeFontFamily,
  textColor,
  setTextColor,
  selectedOption,
  setSelectedOption,
  fontBalanceOptions,
  attributes,
  setAttributes,
}) => {
  return (
    <div className="detail-settings">
      <BorderControlGroup
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <FontFamilyControl
        fontFamily={fontFamily || attributes.fontFamily}
        setFontFamily={onChangeFontFamily}
      />
      <TextColorControl
        textColor={textColor}
        setTextColor={(value) => {
          setTextColor(value);
          setAttributes({ textColor: value });
        }}
      />
      <SelectControl
        label="Font Balance"
        value={selectedOption.label}
        options={fontBalanceOptions.map((opt) => ({ label: opt.label, value: opt.label }))}
        onChange={(label) => {
          const option = fontBalanceOptions.find((opt) => opt.label === label);
          setSelectedOption(option);
        }}
      />
      <BackgroundSelector attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
};

export default UIControlGroup;