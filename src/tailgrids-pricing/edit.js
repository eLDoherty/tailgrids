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
import { ContentPicker } from '@10up/block-components';

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
		classname: 'tailgrids-pricing'
	})

	const {
		attributes: { heading, subheading, caption, products }, setAttributes
	} = props;

	return (
		<section {...blockProps}>
			<div className="tailgrids-pricing__text">
				<RichText
					tagName="p"
					onChange={ (newSubheading) => setAttributes({ subheading: newSubheading }) }
					value={ subheading }
					placeholder="Insert Subheading"
					className="pricing-subheading"
				/>
				<RichText
					tagName="h2"
					onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
					value={ heading }
					placeholder="Insert Heading"
				/>
				<RichText
					tagName="p"
					onChange={ (newCaption) => setAttributes({ caption: newCaption }) }
					value={ caption }
					placeholder="Insert Caption"
					className="pricing-caption"
				/>
			</div>
			<div className="tailgrids-pricing__products">
				<ContentPicker
					onPickChange={(pickedProducts) => {
						setAttributes({ products: pickedProducts })
					}}
					content={products || []}
					label={"Please select product you want to show:"}
					contentTypes={['product']}
					maxContentItems={3}
					isOrderable={true}
				/>
			</div>
		</section>
	);
}
