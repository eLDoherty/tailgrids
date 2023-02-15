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
import { useBlockProps, RichText, InspectorControls, URLInputButton } from '@wordpress/block-editor';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	TextControl,
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
		className: 'tailgrids-cta'
	});

	const {
		attributes: {heading, subheading, caption, buttonText, buttonUrl}, setAttributes
	} = props;

	
	return (
		<section {...blockProps}>
			<div className="container">
				<RichText
					tagName="h2"
					onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
					value={ heading }
					placeholder="Insert Heading"	
				/>
				<RichText
					tagName="h3"
					onChange={ (newSubheading) => setAttributes({ subheading: newSubheading }) }
					value={ subheading }
					placeholder="Insert Subheading"	
				/>
				<RichText
					tagName="p"
					onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
					value={ caption }
					placeholder="Insert Caption"	
				/>
				<a className="cta-button" href={buttonUrl}>{buttonText}</a>
			</div>
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Hero Image' ) }>
					{/* Button Get Started */}
					<ToolsPanelItem
						hasValue={ () => !! buttonText }
						label={ __( 'Button Text' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text"
							value={ buttonText }
							onChange={ (newButtonText) => setAttributes({ buttonText: newButtonText }) }
						/>
					</ToolsPanelItem>
					{/* Button Url CTA */}
					<ToolsPanelItem
						hasValue={ () => !! buttonUrl }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonUrl }
							onChange={ (newUrl) => setAttributes({ buttonUrl: newUrl }) }
						/>
					</ToolsPanelItem> 
				</ToolsPanel>
			</InspectorControls>
		</section>
	);
}
