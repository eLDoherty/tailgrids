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
		className: 'tailgrids-download'
	});

	const {

		attributes: { 
			heading, 
			caption, 
			buttonIosText, 
			buttonIosUrl,
			buttonAndroidText, 
			buttonAndroidUrl, 
			imageId, 
			imageUrl,
			iosIcon,
			androidIcon,
		 }, setAttributes

	} = props;

	const onUpdateImage = (image) => {
		setAttributes({
			imageUrl: image.url,
			imageId: image.id
		});
	}

	return (
		<section {...blockProps}>
			<div className="container">
				<div className="tailgrids-download__wrapper">
					<div className="tailgrids-download__wrapper--left">
						<RichText
							tagName="h3"
							onChange={ (newHeading) => setAttributes({ heading: newHeading }) } 
							value={heading}
							placeholder="Insert Heading"
							className="download-heading"
						 />
						 <RichText 
						 	tagName="p"
							onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
							value={caption}
							placeholder="Insert caption"
							className="download-caption"
						 />
						 <div className="download-button">
							<div className="download-button__ios">
								<img src={iosIcon} />
								<a className="button-ios" href={buttonIosUrl}>{buttonIosText}</a>	
							</div>
							<div className="download-button__android">
								<img src={androidIcon} />
								<a className="button-android" href={buttonAndroidUrl}>{buttonAndroidText}</a>
							</div>
						 </div>
					</div>
					<div className="tailgrids-download__wrapper--right">
						<img src={imageUrl} />
					</div>
				</div>
			</div>

			{/* Toolbar */}
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Download Section Image' ) }>
					{/* Hero Image */}
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

					{/* Upload Icon For IOS */}
					<ToolsPanelItem hasValue={ () => !! iosIcon }
						label={ __( 'image' ) }
						isShownByDefault>
						<MediaUpload
							title={ __( 'Ios Icon', 'tailgrids' ) }
							onSelect={ (image) => setAttributes({ iosIcon: image.url }) }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button
									className={ 'editor-post-featured-image__toggle' }
									onClick={ open } 
									style={{ padding: 0 }}>
									{ iosIcon && <img src={iosIcon} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> }
								</Button>
							) }
						/>
					</ToolsPanelItem>
					
					{/* Upload Icon For Android */}
					<ToolsPanelItem hasValue={ () => !! iosIcon }
						label={ __( 'image' ) }
						isShownByDefault>
						<MediaUpload
							title={ __( 'Android Icon', 'tailgrids' ) }
							onSelect={ (image) => setAttributes({ androidIcon: image.url }) }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button
									className={ 'editor-post-featured-image__toggle' }
									onClick={ open } 
									style={{ padding: 0 }}>
									{ androidIcon && <img src={androidIcon} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> }
								</Button>
							) }
						/>
					</ToolsPanelItem>

					{/* Button IOS text */}
					<ToolsPanelItem
						hasValue={ () => !! buttonIosText }
						label={ __( 'Button Text' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text"
							value={ buttonIosText }
							onChange={ (newButtonIosText) => setAttributes({ buttonIosText: newButtonIosText }) }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! buttonIosUrl }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonIosUrl }
							onChange={ (newButtonIosUrl) => setAttributes({ buttonIosUrl: newButtonIosUrl }) }
						/>
					</ToolsPanelItem> 

					{/* Button Android Text */}
					<ToolsPanelItem
						hasValue={ () => !! buttonAndroidText }
						label={ __( 'Button Text' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text"
							value={ buttonAndroidText }
							onChange={ (newButtonAndroidText) => setAttributes({ buttonAndroidText: newButtonAndroidText }) }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! buttonAndroidUrl }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonAndroidUrl }
							onChange={ (newButtonAndroidUrl) => setAttributes({ buttonAndroidUrl: newButtonAndroidUrl }) }
						/>
					</ToolsPanelItem> 
				</ToolsPanel>
			</InspectorControls>
		</section>
	);
}
