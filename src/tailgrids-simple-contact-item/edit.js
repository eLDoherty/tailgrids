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

	const {
		attributes: { iconId, iconUrl, title, detail }, setAttributes
	} = props;

	const blockProps = useBlockProps({
		className: 'tailgrids-simple-contact-item'
	});

	const onUpdateImage = (image) => {
		setAttributes({
			iconId: image.id,
			iconUrl: image.url
		});
	}

	return (
		<div {...blockProps}>
			<div className="tailgrids-simple-contact-item__thumbnail">
				<img src={iconUrl} alt={title}/>
			</div>
			<div className="tailgrids-simple-contact-item__detail">
				<RichText
					tagName="p"
					onChange={ (newTitle) => setAttributes({ title: newTitle }) }
					value={title}
					placeholder="Insert title"
					className="tailgrids-simple-contact-item__detail--title"
				/>
				<RichText
					tagName="p"
					onChange={ (newDetail) => setAttributes({ detail: newDetail }) }
					value={detail}
					placeholder="Insert detail"
					className="tailgrids-simple-contact-item__detail--text"
				/>
			</div>
			{/* Toolbar */}
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Icon simple contact' ) }>

					{/* Simple contact Icon */}
					<ToolsPanelItem
						hasValue={ () => !! iconUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You should have access to media" }>
							<MediaUpload
								title={ __( 'Image', 'tailgrids' ) }
								onSelect={ onUpdateImage }
								allowedTypes={ [ 'image' ] }
								value={ iconId }
								render={ ( { open } ) => (
									<Button
										className={ 'editor-post-featured-image__toggle' }
										onClick={ open } 
										style={{ padding: 0 }}>
										{ iconUrl && <img src={iconUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> }
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
