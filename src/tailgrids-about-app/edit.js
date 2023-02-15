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
import { useBlockProps, RichText, InnerBlocks, InspectorControls, MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';
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
		className: 'tailgrids-about-app'
	});

	const {
		attributes: { heading, subheading, imageUrl, imageId }, setAttributes
	} = props;

	const ALLOWED_BLOCKS = ['create-block/tailgrids-about-app-item'];

	const onUpdateImage = (image) => {

		setAttributes({
			imageUrl: image.url,
			imageId: image.id
		});

	}

	return (
		<section {...blockProps}>
			<div className="container">
				<div className="tailgrids-about-app__wrapper">
					<div className="tailgrids-about-app__wrapper--left">
						<RichText
							tagName="p"
							onChange={ (newSubheading) => setAttributes({ subheading: newSubheading }) }
							value={subheading}
							placeholder="Insert subheading"
							className="about-app-subheading"
						/>
						<RichText
							tagName="h3"
							onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
							value={heading}
							placeholder="Insert heading"
							className="about-app-heading"
						/>
						<div className="about-app-item">
							<InnerBlocks
								orientation="vertical"
								allowedBlocks={ ALLOWED_BLOCKS }
							/>
						</div>
					</div>
					<div className="tailgrids-about-app__wrapper--right">
						<img src={imageUrl} />
					</div>	
				</div>
			</div>
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'About App Image' ) }>
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'image' ) }
						isShownByDefault
					>
						<MediaUploadCheck fallback={ "You should have permission to access media" }>
							<MediaUpload
								title={ __( 'About App Image', 'tailgrids' ) }
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
