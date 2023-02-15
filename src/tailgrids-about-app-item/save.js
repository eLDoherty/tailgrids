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
		className: 'about-app-item__list'
	});

	const {
		attributes: { heading, caption, imageId, imageUrl, color }, setAttributes
	} = props;

	const styles = color ? { backgroundColor: color.hex } : { backgroundColor: '#4BA0FF'}

	return (
		<div {...blockProps}>
			<div className="icon-wrapper" style={styles}>
				<img src={ imageUrl } />
			</div>
			<h3 className="about-app-item__list--heading">{heading}</h3>
			<p className="about-app-item__list--caption">{caption}</p>
		</div>
	);
}
 