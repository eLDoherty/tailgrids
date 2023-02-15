/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
		className: 'product-slider-item swiper-slide'
	});

	const {
		attributes: {
			heading,
			subheading,
			caption,
			buttonText,
			buttonUrl,
			imageUrl
		}
	} = props;
	return (
		<div {...blockProps}>
			<div className="product-slider-item__left">
				<p className="product-slider-item__left--subheading">{subheading}</p>
				<h3 className="product-slider-item__left--heading">{heading}</h3>
				<p className="product-slider-item__left--caption">{caption}</p>
				<a href={buttonUrl} className="product-slider-item__left--button">{buttonText}</a>
			</div>
			<div className="product-slider-item__right">
				<img src={imageUrl} alt={heading} />
			</div>
		</div>
	);
}
