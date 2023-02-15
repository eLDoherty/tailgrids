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
		className: 'tailgrids-services__item--card'
	});

	const {
		attributes: { heading, caption, imageUrl, imageId }
	} = props;

	return (
		<section {...blockProps}>
			<div className='service-item-icon'>
				<img src={imageUrl} />
			</div>
			<h3 className="service-item-title">{heading}</h3>
			<p className="service-item-caption">{caption}</p>
		</section>
	);
}
