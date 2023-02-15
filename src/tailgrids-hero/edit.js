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
import { useBlockProps, RichText, InspectorControls, URLInputButton, MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';
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
		className: 'tailgrids-hero-editor'
	});

	const {
		attributes: {heading, caption, buttonText, buttonUrl, buttonText1, buttonUrl1, imageUrl, imageId}, 
		setAttributes
	} = props;

	const onChangeHeading = (newHeroHeading) => {
		setAttributes({heading: newHeroHeading});
	}

	const onChangeCaption = (newCaption) => {
		setAttributes({caption: newCaption});
	}

	const onChangeButtonText = (newButonText) => {
		setAttributes({ buttonText: newButonText });
	}

	const onChangeButtonUrl = (newButtonUrl) => {
		setAttributes({ buttonUrl: newButtonUrl });
	}

	const onChangeButtonText1 = (newText1) => {
		setAttributes({ buttonText1: newText1 });
	}

	const onChangeButtonUrl1 = (newUrl1) => {
		setAttributes({ buttonUrl1: newUrl1});
	}

	const onUpdateImage = (image) => {
		setAttributes({ imageUrl: image.url, imageId: image.id });
	}

	const instructions = <p>{ __( 'To edit the image, you need permission to upload media.', 'tailgrids' ) }</p>

	return (
		<section {...blockProps}>
			<div className="tailgrids-hero-editor__caption">
				<RichText
					tagName="h2"
					onChange={ onChangeHeading }
					value={ heading }
					placeholder="Insert Heading"
				/>
				<RichText
					tagName="P"
					onChange={ onChangeCaption }
					value={ caption }
					placeholder="Insert caption"
				/>
				<div className="tailgrids-hero-editor__content--button">
					<div className="tailgrids-hero-editor__button-left">
						<a className="get-started" href={buttonUrl}>{buttonText}</a>
					</div>
					<div className="tailgrids-hero-editor__button-right">
						<a className="play-video" href={buttonUrl1}>
							<p>{buttonText1}</p>
						</a>
					</div>
				</div>
				<div className="tailgrids-hero-editor__image-holder">
					<p>Upload Hero Image from tool bar</p>
				</div>
			</div>

			{/* Toolbar */}

			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Hero Image' ) }>
					{/* Hero Image */}
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ instructions }>
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

					{/* Button Get Started */}
					<ToolsPanelItem
						hasValue={ () => !! buttonText }
						label={ __( 'Button Text' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text"
							value={ buttonText }
							onChange={ onChangeButtonText }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! buttonUrl }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonUrl }
							onChange={ onChangeButtonUrl }
						/>
					</ToolsPanelItem> 
					{/* Button Url Video */}
					<ToolsPanelItem
						hasValue={ () => !! buttonText1 }
						label={ __( 'Button Text' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text"
							value={ buttonText1 }
							onChange={ onChangeButtonText1 }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! buttonUrl1 }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonUrl1 }
							onChange={ onChangeButtonUrl1 }
						/>
					</ToolsPanelItem> 
				</ToolsPanel>
			</InspectorControls>
		</section>
	);
}
