/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InspectorControls, URLInputButton, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	TextControl,
	Button
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files. 
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {

	const blockProps = useBlockProps({
		className: "tailgrids-discover"
	});

	const {
		attributes: { 
			heading,
			subheading,
			caption,
			imageId,
			imageUrl,
			buttonDiscoverText,
			buttonDiscoverUrl,
			buttonExploreText,
			buttonExploreUrl
		}, setAttributes
	} = props;

	const onUpdateImage = (image) => {

		setAttributes({
			imageId: image.id,
			imageUrl: image.url
		});

	}

	return (
		<section {...blockProps}>
			<img className="tailgrids-discover__img" src={imageUrl} />
			<div className="tailgrids-discover__detail">
				<RichText
					tagName='p'
					onChange={ (newSubheading) => setAttributes({ subheading: newSubheading }) }
					value={subheading}
					placeholder="Insert subheading"
					className="tailgrids-discover__detail--subheading"
				/>

				<RichText
					tagName="h3"
					onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
					value={heading}
					placeholder="Insert heading"
					className="tailgrids-discover__detail--heading"
				/>

				<RichText
					tagName="p"
					onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
					value={caption}
					placeholder="Insert caption"
					className="tailgrids-discover__detail--caption"
				/>
				<div className="tailgrids-discover__detail--button">
					<a className="discover-button" href={buttonDiscoverUrl}>{buttonDiscoverText}</a>
					<a className="explore-button" href={buttonExploreUrl}>{buttonExploreText}</a>
				</div>
			</div>
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Button Dark CTA' ) }>
					{/* Big Image for Discover Banner */}
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You should have access to media" }>
							<MediaUpload
								title={ __( 'Image', 'tailgrids' ) }
								onSelect={ onUpdateImage }
								allowedTypes={ [ 'image' ] }
								value={ imageId }
								render={ ( { open } ) => (
									<Button
										className={ 'editor-post-featured-image__toggle' }
										onClick={ open } 
										style={{ padding: 0 }}>
										{ imageUrl && <img src={imageUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</ToolsPanelItem>
					{/* Button Discover */}
					<ToolsPanelItem
						hasValue={ () => !! buttonDiscoverText }
						label={ __( 'Button Discover' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text Discover"
							value={ buttonDiscoverText }
							onChange={ (newButtonDiscoverText) => setAttributes({ buttonDiscoverText: newButtonDiscoverText }) }
						/>
					</ToolsPanelItem>
					{/* Button Url Discover */}
					<ToolsPanelItem
						hasValue={ () => !! buttonDiscoverUrl }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonDiscoverUrl }
							onChange={ (newDiscoverUrl) => setAttributes({ buttonDiscoverUrl: newDiscoverUrl }) }
						/>
					</ToolsPanelItem> 
					{/* Button Explore */}
					<ToolsPanelItem
						hasValue={ () => !! buttonExploreText }
						label={ __( 'Button Explore' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text Explore"
							value={ buttonExploreText }
							onChange={ (newButtonExploreText) => setAttributes({ buttonExploreText: newButtonExploreText }) }
						/>
					</ToolsPanelItem>
					{/* Button Url Explore */}
					<ToolsPanelItem
						hasValue={ () => !! buttonExploreUrl }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonExploreUrl }
							onChange={ (newExploreUrl) => setAttributes({ buttonExploreUrl: newExploreUrl }) }
						/>
					</ToolsPanelItem> 
				</ToolsPanel>
			</InspectorControls>
		</section>
	);
}
