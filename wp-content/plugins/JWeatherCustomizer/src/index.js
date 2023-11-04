/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
import { getBlockType } from '@wordpress/blocks'; // 追加した行

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
// import save from './save';
import metadata from './block.json';

/**
 * Only register block if it's not already registered
 */
if (getBlockType(metadata.name) === undefined) {
    // Block settings
    const blockSettings = {
        // Block settings can be defined here as usual
        example: {
            attributes: {
                message: 'j-weather-customizer',
            },
        },
        edit: Edit,
        save() {
            // Defines what happens when the block is saved
            return null; // We return null because save is handled in PHP
        },
    };

    registerBlockType(metadata.name, blockSettings);

}
