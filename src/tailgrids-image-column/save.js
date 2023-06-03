/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
		className: 'tailgrids-image-column'
	});

	const {
		attributes: { heading, imageUrl, caption, position }
	} = props;

	const wrapperClass = position ? 'tailgrids-image-column__wrapper' : 'tailgrids-image-column__wrapper image-column-reverse';

	return (
		<section {...blockProps}>
			<div className="container">
				<div className={wrapperClass}>
					<div className="tailgrids-image-column__wrapper--text">
						<h2 className="column-text-heading">{heading}</h2>
						<RichText.Content
							tagName="p"
							value={caption}
							className="column-text-caption"
						/>
					</div>
					<div className="tailgrids-image-column__wrapper--image">
						<img src={imageUrl} />
					</div>
				</div>
			</div>
		</section>
	);
}