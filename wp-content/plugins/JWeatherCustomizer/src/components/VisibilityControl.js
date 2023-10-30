import { CheckboxControl } from '@wordpress/components';

const VisibilityControl = ({ settings }) => {

    const handleVisibilityChange = (index, isChecked) => {
        const updatedSettings = [...settings];
        updatedSettings[index].checked = isChecked;

        updatedSettings[index].onChange(isChecked);
    };

    return (
        <div className="visibility-control">
            {settings.map((setting, index) => (
                <CheckboxControl
                    key={index}
                    label={setting.label}
                    checked={setting.checked}
                    onChange={(isChecked) => handleVisibilityChange(index, isChecked)}
                />
            ))}
        </div>
    );
};

export default VisibilityControl;
