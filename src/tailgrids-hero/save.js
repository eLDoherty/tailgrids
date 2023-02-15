/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import polygon from '../assets/polygon.png';

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
		className: "tailgrids-hero"
	});

	const {
		attributes: { heading, caption, buttonText, buttonUrl, buttonText1, buttonUrl1, imageUrl }
	} = props;

	return(
		<section {...blockProps}>
			<div className="tailgrids-hero__content">
				<h2>{heading}</h2>
				<p>{caption}</p>
				<div className="tailgrids-hero__content--button">
					<div className="tailgrids-hero__button-left">
						<a className="get-started" href={buttonUrl}>{buttonText}</a>
					</div>
					<div className="tailgrids-hero__button-right">
						<a className="play-video" href={buttonUrl1}>
							<div class="rounded-wrapper">
								<img src={polygon} />
							</div>
							<p>{buttonText1}</p>
						</a>
					</div>
				</div>
			</div>
			<div className="tailgrids-hero__holder">
				<div className="tailgrids-hero__holder--main" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
					<img src={imageUrl} />
				</div>
			</div>
		</section>
	);
}
