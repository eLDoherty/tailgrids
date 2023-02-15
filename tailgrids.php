<?php
/**
 * Plugin Name:       Tailgrids
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tailgrids
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
function create_block_tailgrids_block_init() {
	register_block_type( __DIR__ . '/build/tailgrids-hero' );
	register_block_type( __DIR__ . '/build/tailgrids-crafted' );
	register_block_type( __DIR__ . '/build/tailgrids-crafted-item' );
	register_block_type( __DIR__ . '/build/tailgrids-team' );
	register_block_type( __DIR__ . '/build/tailgrids-cta' );
	register_block_type( __DIR__ . '/build/tailgrids-pricing' );
	register_block_type( __DIR__ . '/build/tailgrids-testimonials' );
	register_block_type( __DIR__ . '/build/tailgrids-contact' );
	register_block_type( __DIR__ . '/build/tailgrids-partner' );
	register_block_type( __DIR__ . '/build/tailgrids-partner-item' );
	register_block_type( __DIR__ . '/build/tailgrids-projects' );
	register_block_type( __DIR__ . '/build/tailgrids-services' );
	register_block_type( __DIR__ . '/build/tailgrids-services-item' );
	register_block_type( __DIR__ . '/build/tailgrids-blogs' );
	register_block_type( __DIR__ . '/build/tailgrids-dark-cta' );
	register_block_type( __DIR__ . '/build/tailgrids-about-app' );
	register_block_type( __DIR__ . '/build/tailgrids-about-app-item' );
	register_block_type( __DIR__ . '/build/tailgrids-download' );
	register_block_type( __DIR__ . '/build/tailgrids-trending' );
	register_block_type( __DIR__ . '/build/tailgrids-trending-item' );
	register_block_type( __DIR__ . '/build/tailgrids-discover' );
	register_block_type( __DIR__ . '/build/tailgrids-product-slider' );
	register_block_type( __DIR__ . '/build/tailgrids-product-slider-item' );
	register_block_type( __DIR__ . '/build/tailgrids-simple-contact' );
	register_block_type( __DIR__ . '/build/tailgrids-simple-contact-item' );
}

add_action( 'init', 'create_block_tailgrids_block_init' );

