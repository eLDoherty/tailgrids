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
		className: 'tailgrids-partner-item partner-item-editor'
	});

	const {
		attributes: { imageId, imageUrl, partnerUrl }, setAttributes
	} = props;

	const onUpdateImage = (image) => {
		setAttributes({
			imageId: image.id,
			imageUrl: image.url
		});
	}

	return (
		<div {...blockProps}>	
			<img src={imageUrl} />
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Partner Logos' ) }>
					{/* Partner Logo */}
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You should have permission to access media" }>
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
					{/* Partner logo url */}
					<ToolsPanelItem
						hasValue={ () => !! partnerUrl }
						label={ __( 'Partner URL' ) }
						isShownByDefault
						>
						<TextControl
							label="Partner URL"
							value={ partnerUrl }
							onChange={ (newPartnerUrl) => setAttributes({ partnerUrl: newPartnerUrl }) }
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
		</div>
	);
}
