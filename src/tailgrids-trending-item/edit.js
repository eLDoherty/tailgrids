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
import { useBlockProps, RichText, InspectorControls, MediaUploadCheck, MediaUpload, URLInputButton } from '@wordpress/block-editor';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	TextareaControl,
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
		className: "tailgrids-tending__wrapper--item"
	});
	 
	const {
		attributes: { imageId, imageUrl, heading, subheading, caption, buttonText, buttonUrl }, setAttributes
	} = props;

	const onUpdateImage = (image) => {

		setAttributes({
			imageUrl: image.url,
			imageId: image.id
		});
		
	}

	return (
		<div {...blockProps}>
			<div className="trending-image">
				<img src={imageUrl} />
			</div>
			<div className="trending-detail">
				<RichText
					tagName="p"
					onChange={ (newSubheading) => setAttributes({ subheading: newSubheading }) }
					value={subheading}
					placeholder="Insert subheading"
					className="trending-detail__subheading"
				/>
				<RichText
					tagName="h3"
					onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
					value={heading}
					placeholder="Insert heading"
					className="trending-detail__heading"
				/>
				<RichText
					tagName="p"
					onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
					value={caption}
					placeholder="Insert caption"
					className="trending-detail__caption"
				/>
				<a className="trending-detail__button" href={buttonUrl}>{buttonText}</a>
			</div>

			{/* Toolbar */}
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Image trending product slider' ) }>

					{/* Trending Image */}
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

					{/* Button Trending */}
					<ToolsPanelItem
						hasValue={ () => !! buttonText }
						label={ __( 'Button Slider Trending' ) }
						isShownByDefault
						>
						<TextControl
							label="Trending Button"
							value={ buttonText }
							onChange={ (newButtonText) => setAttributes({ buttonText: newButtonText }) }
						/>
					</ToolsPanelItem>

					{/* Text Button */}
					<ToolsPanelItem
						hasValue={ () => !! buttonUrl }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonUrl }
							onChange={ (newButtonUrl) => setAttributes({ buttonUrl: newButtonUrl }) }
						/>
					</ToolsPanelItem> 

				</ToolsPanel>
			</InspectorControls>
		</div>
	);
}
