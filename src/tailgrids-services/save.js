/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

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
		className: 'tailgrids-services'
	});

	const {
		attributes: { heading, subheading, caption }, setAttributes
	} = props;

	return(	
		<section {...blockProps}>
			<div className="tailgrids-services__text">
				<p className='tailgrids-services__text--subheading'>{subheading}</p>
				<h3 className="tailgrids-services__text--heading">{heading}</h3>
				<p className="tailgrids-services__text--caption">{caption}</p>
			</div>
			<div className="container">
				<div className="tailgrids-services__item">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);

}
