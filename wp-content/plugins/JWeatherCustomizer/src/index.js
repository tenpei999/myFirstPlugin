/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType, getBlockType } from '@wordpress/blocks';

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
if (!getBlockType(metadata.name)) {
    registerBlockType(metadata.name, {
        ...metadata, // メタデータを展開して設定に適用します
        edit: Edit, // 編集コンポーネントを設定します
        save: () => null, // PHP側で保存処理を行うので、ここではnullを返します
    });
}
