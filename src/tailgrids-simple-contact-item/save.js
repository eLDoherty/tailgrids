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
		className: 'tailgrids-simple-contact-item'
	});

	const {
		attributes: { iconUrl , title, detail }
	} = props;

	return (
		<div {...blockProps}>
			<div className="tailgrids-simple-contact-item__thumbnail">
				<img src={iconUrl} alt={title} />
			</div>
			<div className="tailgrids-simple-contact-item__detail">
				<p className="tailgrids-simple-contact-item__detail--title">{title}</p>
				<p className="tailgrids-simple-contact-item__detail--text">{detail}</p>
			</div>
		</div>
	);
}
