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
		className: 'tailgrids-dark-cta'
	});

	const {
		attributes: { heading, subheading, buttonUrl, buttonText, buttonUrl1, buttonText1 }, setAttributes
	} = props;

	return (
		<section {...blockProps}>
			<div className="container">
				<div className="tailgrids-dark-cta__banner">
					<div className="tailgrids-dark-cta__banner--left">
						<p className="banner-subheading">{subheading}</p>
						<h3 className="banner-heading">{heading}</h3>
					</div>
					<div className="tailgrids-dark-cta__banner--right">
						<a className="black-cta-contact" href={buttonUrl}>{buttonText}</a>
						<a className="black-cta-quote" href={buttonUrl1}>{buttonText1}</a>
					</div>
				</div>
			</div>
		</section>
	);
}
