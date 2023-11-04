<?php

/**
 * Plugin Name:       JWeatherCustomizer
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       JWeatherCustomizer
 *
 * @package           create-block
 */

function create_block_gutenpride_block_init()
{
	register_block_type(
		__DIR__ . '/build',
		[
			'render_callback' => 'jWeatherCustomizer_render_block',
		]
	);
}

add_action('init', 'create_block_gutenpride_block_init');


function enqueue_my_plugin_script()
{
	// スクリプトを登録します。ここでの 'my-plugin-script' はあなたのスクリプトハンドルです。
	wp_register_script('my-plugin-script', plugins_url('build/index.js', __FILE__), array(), '1.0.0', true);

	// データをローカライズしてセキュアな方法でスクリプトに渡します。
	$plugin_data = array(
		'pluginImagePath' => plugins_url('images/', __FILE__),
		'restUrl'         => rest_url('j-weather-customizer/save-data/'),
		'siteUrl'         => get_site_url(),
	);

	// ローカライズスクリプト
	wp_localize_script('my-plugin-script', 'myPluginData', $plugin_data);

	// Add an inline script to check if the block is already registered.
	$inline_script = <<<EOT
			document.addEventListener('DOMContentLoaded', function(){
					if (wp.blocks.getBlockType('create-block/j-weather-customizer')) {
							console.error('Block "create-block/j-weather-customizer" is already registered.');
					}
			});
	EOT;

	// スクリプトをエンキューします。
	wp_enqueue_script('my-plugin-script');
}

add_action('admin_enqueue_scripts', 'enqueue_my_plugin_script');

include dirname(__FILE__) . '/render-blocks.php';

add_action('rest_api_init', function () {
	register_rest_route('j-weather-customizer', '/save-data/', array(
		'methods' => 'POST',
		'callback' => 'save_weather_data',
		'permission_callback' => '__return_true'
	));
});

function save_weather_data(WP_REST_Request $request)
{
	// error_log('[Debug] save_weather_data - Start');
	// error_log('[Debug] Request Parameters: ' . print_r($request->get_params(), true));
	$data = $request->get_param('dailyData');
	if ($data) {
		// error_log('[Debug] Data to be saved: ' . print_r($data, true));
	} else {
		// error_log('[Debug] No dailyData parameter found in the request.');
	}
	if ($data) {
		$result = update_option('my_weather_data', json_encode($data));
		// error_log('[Debug] Update Option Result: ' . ($result ? 'Success' : 'Failed'));
	} else {
		// error_log('[Debug] Data not provided');
		return new WP_REST_Response('Error: Data not provided', 400);
	}
	// error_log('[Debug] save_weather_data - End');
	return new WP_REST_Response(array('message' => 'Success'), 200);
}
