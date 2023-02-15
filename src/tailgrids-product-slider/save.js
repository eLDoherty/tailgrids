/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {

	const blockProps = useBlockProps.save({
		className: 'tailgrids-product-slider'
	});

	return (
		<section {...blockProps}>
			<div className="container">
				<div className="tailgrids-product-slider__wrapper swiper">
					<div className="tailgrids-product-slider__wrapper--item swiper-wrapper">
						<InnerBlocks.Content />
					</div>
					<div class="swiper-button-prev">{'<'}</div>
					<div class="swiper-button-next">{'>'}</div>
				</div>
			</div>
		</section>
	);
}
