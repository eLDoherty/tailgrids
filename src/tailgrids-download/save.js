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
		className: 'tailgrids-download'
	});

	const {
		attributes: { 
			heading, caption, buttonIosText, buttonIosUrl, 
			buttonAndroidText, buttonAndroidUrl, 
			imageId, imageUrl, iosIcon, androidIcon
		}
	} = props;

	return (
		<section {...blockProps}>
			<div className="container">
				<div className="tailgrids-download__wrapper">
					<div className="tailgrids-download__wrapper--left">
						<h3 className="download-heading">{heading}</h3>
						<p className="download-caption">{caption}</p>
						<div className="download-button">
							<div className="download-button__ios">
								<img src={iosIcon} />
								<a className="button-ios" href={buttonIosUrl}>{buttonIosText}</a>
							</div>
							<div className="download-button__android">
								<img src={androidIcon} />
								<a className="button-adnroid" href={buttonAndroidUrl}>{buttonAndroidText}</a>
							</div>
						</div>
					</div>
					<div className="tailgrids-download__wrapper--right">
						<img src={imageUrl} />
					</div>
				</div>
			</div>
		</section>
	);
}
