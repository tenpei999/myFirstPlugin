<?php

/**
 * Plugin Name:       MyfirstPlugin
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       myfirstPlugin
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenpride_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_gutenpride_block_init');

function get_all_image_urls()
{
	// プラグインのディレクトリ内のimgフォルダへのパスを取得
	$dir_path = plugin_dir_path(__FILE__) . 'src/static/img/';

	// imgフォルダ内の全ての画像ファイル（.jpg, .png, .gifなど）を取得
	$image_files = glob($dir_path . '*.{jpg,jpeg,png,gif,svg}', GLOB_BRACE);

	$image_urls = [];
	foreach ($image_files as $file) {
		// ファイル名のみを取得 (ディレクトリパスを除外)
		$filename = basename($file);

		// 画像のURLを生成
		$image_urls[] = plugins_url('img/' . $filename, __FILE__);
	}

	return $image_urls;
}

$image_urls = get_all_image_urls();

function enqueue_scripts_with_data()
{
	global $image_urls;
	
	// 例えば、複数のJSファイルをキューに追加する場合
	$script_handles = ['edit'];
	
	foreach ($script_handles as $handle) {
		
		wp_script_add_data($handle, 'type', 'module');
		var_dump($script_handles);

		// 各スクリプトにデータを提供
		wp_localize_script($handle, 'myPluginData', array(
			'imageUrls' => $image_urls
		));
	}
}
add_action('admin_enqueue_scripts', 'enqueue_scripts_with_data');
