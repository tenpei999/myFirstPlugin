// BorderControlGroup.js
import { __ } from '@wordpress/i18n';
import { RangeControl, SelectControl } from '@wordpress/components';
import { __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';
import { useBorderControl } from '../functions/useBorderControl';

export default function BorderControlGroup({ attributes, setAttributes }) {
    const {
        borders,
        onChangeBorder,
        handleRangeChange,
        handleUnitChange,
        borderColors, // ここを変更しました
        units
    } = useBorderControl(attributes, setAttributes);

    return (
        <>
            <BorderBoxControl
                colors={borderColors} // ここを変更しました
                label={__('Borders')}
                onChange={onChangeBorder}
                value={borders}
            />
                        <div>
                <RangeControl
                    label="Set your value"
                    value={parseInt(attributes.borderRadiusValue, 10)}
                    onChange={handleRangeChange}
                    min={0}
                    max={(attributes.borderRadiusValue && attributes.borderRadiusValue.includes('px')) ? 100 : 100}
                />
                <SelectControl
                    label="Select unit"
                    value={attributes.borderRadiusValue && attributes.borderRadiusValue.replace(/[0-9]/g, '')}
                    options={units}
                    onChange={handleUnitChange}
                />
            </div>
        </>
    );
}
