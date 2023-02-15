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
import { useBlockProps, RichText, InspectorControls, URLInputButton, MediaUploadCheck, MediaUpload, InnerBlocks} from '@wordpress/block-editor';
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
		className: "tailgrids-crafted-editor"
	});

	const {
		attributes: {caption, heading, imageUrl, imageId}, setAttributes
	} = props;

	const ALLOWED_BLOCKS = ['create-block/tailgrids-crafted-item'];

	const onChangeCaption = (newCaption) => {
		setAttributes({ caption: newCaption })
	}

	const onChangeHeading = (newHeading) => {
		setAttributes({ heading: newHeading });
	}

	const onUpdateImage = (image) => {
		setAttributes({ imageUrl: image.url, imageId: image.id});
	}

	return (
		<section {...blockProps}>
			<div className="tailgrids-crafted-editor__wrapper">
				<div className="tailgrids-crafted-editor__wrapper--left">
					<RichText
						tagName="p"
						onChange={ onChangeCaption }
						value={ caption }
						placeholder="Insert Caption"	
					/>
					<RichText 
						tagName="h3"
						onChange={ onChangeHeading }
						value={ heading }
						placeholder="Insert Heading"
					/>
					<div clasName="crafted-item-wrapper">
						<InnerBlocks
							orientation="vertical"
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
					</div>
				</div>
				<div className="tailgrids-crafted-editor__wrapper--right">
					<img src={imageUrl} />
				</div>
			</div>

			{/* Tool Bar */}
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Crafted Image' ) }>
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You need permision to access media" }>
							<MediaUpload
								title={ __( 'Upload Crafted Image', 'tailgrids' ) }
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
				</ToolsPanel>
			</InspectorControls>

		</section>
	);
}
