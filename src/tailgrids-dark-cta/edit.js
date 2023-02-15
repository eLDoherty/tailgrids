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
		className: 'tailgrids-dark-cta'
	});

	const {
		attributes: { heading, subheading, buttonText, buttonUrl, buttonText1, buttonUrl1 } , setAttributes
	} = props;

	return (
		<section {...blockProps}>
			<div className='container'>
				<div className="tailgrids-dark-cta__banner">
					<div className="tailgrids-dark-cta__banner--left">
						<RichText
							tagName="p"
							onChange={ (newSubheading) => setAttributes({ subheading: newSubheading }) }
							value={subheading}
							placeholder="Insert subheading"
							className="banner-subheading"					
						/>
						<RichText
							tagName="h3"
							onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
							value={heading}
							placeholder="Insert heading"
							className="banner-heading"
						/>
					</div>
					<div className="tailgrids-dark-cta__banner--right">
						<a className="black-cta-contact" href={buttonUrl}>{buttonText}</a>
						<a className="black-cta-quote" href={buttonUrl1}>{buttonText1}</a>
					</div>
				</div>
			</div>
			<InspectorControls key="setting">
				<ToolsPanel label={ __( 'Button Dark CTA' ) }>
					{/* Button Contact */}
					<ToolsPanelItem
						hasValue={ () => !! buttonText }
						label={ __( 'Button Contact' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text Contact"
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
					{/* Button Get Quote */}
					<ToolsPanelItem
						hasValue={ () => !! buttonText1 }
						label={ __( 'Button Get Quote' ) }
						isShownByDefault
						>
						<TextControl
							label="Button Text Get Quote"
							value={ buttonText1 }
							onChange={ (newButtonText1) => setAttributes({ buttonText1: newButtonText1 }) }
						/>
					</ToolsPanelItem>
					{/* Button Url Get Quote */}
					<ToolsPanelItem
						hasValue={ () => !! buttonUrl1 }
						label={ __( 'URL' ) }
						isShownByDefault
						>
						<URLInputButton
							label="Edit Link"
							url={ buttonUrl1 }
							onChange={ (newUrl1) => setAttributes({ buttonUrl1: newUrl1 }) }
						/>
					</ToolsPanelItem> 
				</ToolsPanel>
			</InspectorControls>
		</section>
	);
}
