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
	register_block_type(
		__DIR__ . '/build',
		[
			'render_callback' => 'myfirstplugin_render_block'
		]
	);
}

add_action('init', 'create_block_gutenpride_block_init');

function enqueue_scripts_with_data()
{
	$script_handles = ['editorScript'];

	foreach ($script_handles as $handle) {
		wp_script_add_data($handle, 'type', 'module');
	}

	// プラグイン内の images フォルダへのパスを定義
	$plugin_image_path = plugins_url('images/', __FILE__);
	// インラインスクリプト内で変数を使用する
	$inline_script = "
        <script>
            const pluginImagePath = '{$plugin_image_path}';
        </script>
    ";

	// スクリプトを出力
	echo $inline_script;
}
add_action('admin_enqueue_scripts', 'enqueue_scripts_with_data');

include dirname(__FILE__) . '/render-blocks.php';

add_action('rest_api_init', function () {
	register_rest_route('my-weather-plugin', '/save-data/', array(
		'methods' => 'POST',
		'callback' => 'save_weather_data',
		'permission_callback' => '__return_true' 
	));
});

function save_weather_data(WP_REST_Request $request)
{
	$data = $request->get_param('dailyData');

	// JSONデータをWordPressオプションとして保存します。
	if ($data) {
		update_option('my_weather_data', json_encode($data));
	} else {
		return new WP_REST_Response('Error: Data not provided', 400);
	}

	return new WP_REST_Response(array('message' => 'Success'), 200);
}
