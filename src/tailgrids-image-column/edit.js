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
	Button, ColorPicker, PanelBody, PanelRow,
	ToggleControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';

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
		className: 'tailgrids-image-column'
	});

	const {
		attributes: { heading, caption, imageId, imageUrl, position }, setAttributes
	} = props;

	const onUpdateImage = (image) => {
		setAttributes({
			imageId: image.id,
			imageUrl: image.url
		});
	}

	const wrapperClass = position ? 'tailgrids-image-column__wrapper' : 'tailgrids-image-column__wrapper image-column-reverse';

	return (
		<section {...blockProps}>
			<div className="container">
				<div className={wrapperClass}>
					<div className="tailgrids-image-column__wrapper--text">
						<RichText
							tagName="h2"
							onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
							value={heading}
							placeholder={ __('Insert heading') }
							className="column-text-heading"
						/>
						<RichText
							tagName="p"
							onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
							value={caption}
							placeholder={ __('Insert caption') }
							className="column-text-caption"
						/>
					</div>
					<div className="tailgrids-image-column__wrapper--image">
						<img src={imageUrl} />
					</div>
				</div>
			</div>

			{/* Setting Blocks */}
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Column Image' ) }>
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You should have permission to access media" }>
							<MediaUpload
								title={ __( 'Column Image', 'tailgrids' ) }
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
					title={ __('Image position', 'tailgrids' ) }
					initialOpen={ true }
				>	
					<ToggleControl
						label="Image position"
						help={ position ? 'Right' : 'Left' }
						checked={ position }
						onChange={ (selectedPosition) => setAttributes({ position: selectedPosition }) }
					/>
				</PanelBody>
			</InspectorControls>

		</section>
	);
}
