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
		className:"tailgrids-discover"
	});

	const {
		attributes: {
			heading,
			subheading,
			caption,
			imageUrl,
			buttonDiscoverText,
			buttonDiscoverUrl,
			buttonExploreText,
			buttonExploreUrl
		} 
	} = props;

	return (
		<section {...blockProps}>
			<img className="tailgrids-discover__img" src={imageUrl}/>
			<div className="tailgrids-discover__detail">
				<p className="tailgrids-discover__detail--subheading">{subheading}</p>
				<h3 className="tailgrids-discover__detail--heading">{heading}</h3>
				<p className="tailgrids-discover__detail--caption">{caption}</p>
				<div className="tailgrids-discover__detail--button">
					<a className="discover-button" href={buttonDiscoverUrl}>{buttonDiscoverText}</a>
					<a className="explore-button" href={buttonExploreUrl}>{buttonExploreText}<span className="arrow-right">⭢</span></a>
				</div>
			</div>
		</section>
	);
}
