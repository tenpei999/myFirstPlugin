/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

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
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
const defaultBorder = {
	color: '#72aee6',
	style: 'dashed',
	width: '10px',
};

registerBlockType(metadata.name, {
	/**
	 * Used to construct a preview for the block to be shown in the block inserter.
	 */

	example: {
		attributes: {
			message: 'my-first-plugin',
			selectedCity: {
				type: 'string',     
				default: '東京',    
			},
			todayWeather: {
				type: 'object',
				default: {}
			},
			tomorrowWeather: {
				type: 'object',
				default: {}
			},
			weeklyWeather: {
				type: 'array',
				default: []
			},
			borderRadiusValue: {
				type: 'string',
				default: '0px'
			},
			borders: {
				type: 'object',
				default: {
					top: defaultBorder,
					right: defaultBorder,
					bottom: defaultBorder,
					left: defaultBorder,
				}
			},
			fontFamily: {
				type: 'string',
				default: 'Noto Sans JP, sans-serif'
			},
			textColor: {
				type: 'string',
				default: 'black'
			},
			backgroundStyleType: {
				type: 'string',
				default: 'color', 
			},
			backgroundImage: {
				type: 'string', 
				default: 'http://hoge.local/wp-content/uploads/2023/10/IMG_5308-scaled.jpeg',   
			},
			backgroundGradient: {
				type: 'string',
				default: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)', 
			},
			backgroundColor: {
				type: 'string',
				default: '#fff', 
			},
			balanceOption: {
				type: 'string',
				default: 'EmphasizeTheWeather', 
			},
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save() {
		return null;
	},
});

