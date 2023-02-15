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
		className: 'tailgrids-about-app'
	});

	const {
		attributes: { heading, subheading, imageUrl, imageId }, setAttributes
	} = props;

	return (
		<section {...blockProps}>
			<div className="container">
				<div className="tailgrids-about-app__wrapper">
					<div className="tailgrids-about-app__wrapper--left">
						<p className="about-app-subheading">{subheading}</p>
						<h3 className="about-app-heading">{heading}</h3>
						<div className="about-app-item">
							<InnerBlocks.Content />
						</div>
					</div>
					<div className="tailgrids-about-app__wrapper--right">
						<img src={imageUrl} />
					</div>
				</div>
			</div>
		</section>
	);
}
