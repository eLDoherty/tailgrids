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
import { useBlockProps, RichText, InspectorControls, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	Button, ColorPicker, PanelBody, PanelRow
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
		className:"about-app-item__list" 
	});

	const {
		attributes: { heading, caption, imageUrl, imageId, color }, setAttributes
	} = props;

	const onUpdateImage = (image) => {
		setAttributes({
			imageUrl: image.url,
			imageId: image.id
		});
	}

	const styles = color ? { backgroundColor: color.hex } : { backgroundColor: '#4BA0FF' };

	return (
		<div {...blockProps}>
			<div className="icon-wrapper" style={ styles }>
				<img src={ imageUrl } />
			</div>

			<RichText
				tagName="h3"
				onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
				value={ heading }
				placeholder="Insert heading"
				className="about-app-item__list--heading"
			/>

			<RichText 
				tagName="p"
				onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
				value={ caption }
				placeholder="Insert caption"
				className="about-app-item__list--caption"
			/>

			{/* Setting Blocks */}
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'About App Item Icon' ) }>
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You should have permission to access media" }>
							<MediaUpload
								title={ __( 'About App Item Icon', 'tailgrids' ) }
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
				<PanelBody
					title={ __('Color Picker For Background Icon About App Item', 'tailgrids' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<ColorPicker 
							color={ color }
							onChangeComplete={ (value) => setAttributes({ color:value }) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
