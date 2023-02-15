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
import { useBlockProps, RichText, InspectorControls, MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
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
		className: 'tailgrids-services__item--card service-item-editor'
	});

	const {
		attributes: { heading, caption, imageUrl, imageId }, setAttributes
	} = props;

	const onUpdateImage = (image) => {
		setAttributes({
			imageUrl: image.url,
			imageId: image.id
		});
	}
 
	return (
		<div {...blockProps}>
			<div className="service-item-icon">
				<img src={imageUrl} />
			</div>
			<RichText 
				tagName="h3"
				onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
				value={heading}
				placeholder="Insert Heading"
				className="service-item-title"
			/>
			
			<RichText 
				tagName="p"
				onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
				value={caption}
				placeholder="Insert Caption"
				className="service-item-caption"
			/>
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Service Icon' ) }>
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You should have permission to access media" }>
							<MediaUpload
								title={ __( 'Service Item Icon', 'tailgrids' ) }
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
		</div>
	);
}
