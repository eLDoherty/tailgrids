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
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

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
		className: 'tailgrids-services'
	});

	const {
		attributes: { heading, subheading, caption}, setAttributes
	} = props;
	
	const ALLOWED_BLOCKS = ['create-block/tailgrids-services-item'];

	return (
		<section {...blockProps}>
			<div className="tailgrids-services__text">
				<RichText
					tagName="p"
					onChange={ (newSubheading) => setAttributes({ subheading: newSubheading}) }
					value={subheading}
					placeholder="Insert Subheading"
					className="tailgrids-services__text--subheading"
				/>

				<RichText
					tagName="h3"
					onChange={ (newHeading) => setAttributes({ heading: newHeading }) }
					value={heading}
					placeholder="Insert Heading"
					className="tailgrids-services__text--heading"
				/>

				<RichText
					tagName='p'
					onChange={ (newCaption) => setAttributes({ caption: newCaption}) }
					value={caption}
					placeholder="Insert Caption"
					className="tailgrids-services__text--caption"
				/>
			</div>
			<div className="container">
				<div className="tailgrids-services__item">
					<InnerBlocks
						orientation="horizontal"
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
			</div>
		</section>
	);
}
