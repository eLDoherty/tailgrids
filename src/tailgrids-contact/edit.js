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
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
		className: 'tailgrids-contact-editor'
	});

	const {
		attributes: { heading, subheading, locationHeading, locationDetail, mailHeading, mailDetail }, setAttributes
	} = props;

	return (
		<section {...blockProps}>
			<div className="tailgrids-contact-editor__top">
				<RichText
					tagName="p"
					onChange={ (newSubheading) => setAttributes({ subheading: newSubheading}) }
					value={ subheading }
					placeholder="Insert Subheading"	
				/>
				<RichText
					tagName="h2"
					onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
					value={ heading }
					placeholder="Insert Heading"	
				/>
			</div>
			<div className="tailgrids-contact-editor__bottom">
				<div className="tailgrids-contact-editor__bottom--location">
					<RichText
						tagName="h3"
						onChange={ (newLocationHeading) => setAttributes({ locationHeading: newLocationHeading }) }
						value={locationHeading}
						placeholder="Our Location"
					/>
					<RichText
						tagName="p"
						onChange={ (newLocationDetail) => setAttributes({ locationDetail: newLocationDetail }) }
						value={locationDetail}
						placeholder="Address"
					/>
				</div>
				<div className="tailgrids-contact-editor__bottom--mail">
					<RichText
						tagName="h3"
						onChange={ (newMailHeading) => setAttributes({ mailHeading: newMailHeading }) }
						value={mailHeading}
						placeholder="What we can help?"
					/>
					<RichText
						tagName="p"
						onChange={ (newMailDetail) => setAttributes({ mailDetail: newMailDetail }) }
						value={mailDetail}
						placeholder="admin@tailgrids.com"
					/>
				</div>
			</div>
		</section>	
	);
}
