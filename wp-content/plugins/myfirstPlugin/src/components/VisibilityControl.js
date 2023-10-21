import {
	CheckboxControl,
}
	from '@wordpress/components';

const VisibilityControl = ({ settings }) => {
  return (
      <div className="visibility-control">
          {settings.map((setting, index) => (
              <CheckboxControl
                  key={index}
                  label={setting.label}
                  checked={setting.checked}
                  onChange={setting.onChange} // 直接カスタム onChange を使用
              />
          ))}
      </div>
  );
};

export default VisibilityControl;