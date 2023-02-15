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
		className: "tailgrids-crafted"
	})
	const {
		attributes: {caption, heading, imageUrl, imageId}, setAttributes
	} = props;

	return (
		<section {...blockProps}>
			<div className="tailgrids-crafted__wrapper">
				<div className="tailgrids-crafted__wrapper--left" data-aos="fade-right" data-aos-duration="1500">
					<p>{caption}</p>
					<h3>{heading}</h3>
					<div clasName="crafted-item-wrapper">
						<InnerBlocks.Content />
					</div>
				</div>
				<div className="tailgrids-crafted__wrapper--right" data-aos="fade-left" data-aos-duration="1500">
					<img src={imageUrl} />
				</div>
			</div>
		</section>
	);
}
