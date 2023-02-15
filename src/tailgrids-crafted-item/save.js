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

	const {
		attributes: {number, heading, caption, color, colorNumber }, setAttributes
	} = props;

	const blockProps = useBlockProps.save({
		className: "crafted-item"
	})

	const styles = color && colorNumber ? { backgroundColor: color.hex, color: colorNumber.hex } : { backgroundColor: '#00000' };

	return (
		<div {...blockProps}>
			<div className="crafted-item__number">
				<div className="number-holder" style={styles}>
					{number}
				</div>
			</div>
			<div className="crafted-item__text">
				<h4>{heading}</h4>
				<p className="item-caption">{caption}</p>
			</div>
		</div>
	);
}
