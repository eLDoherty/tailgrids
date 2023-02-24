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
		className: 'tailgrids-heading-text'
	});

	const {
		attributes: { heading, subheading, caption } , setAttributes
	} = props;

	const onChangeSubheading = ( newSubheading ) => {
		setAttributes({ subheading: newSubheading })
	}

	const onChangeHeading = ( newHeading ) => {
		setAttributes({ heading: newHeading })
	}

	const onChangeCaption = ( newCaption ) => {
		setAttributes({ caption: newCaption })
	}

	return (
		<section {...blockProps}>
			<div className="tailgrids-heading-text__content">
				<RichText
					tagName="p"
					onChange={ onChangeSubheading }
					value={subheading}
					placeholder={ __('Insert subheading') }
					className="tailgrids-heading-text__content--subheading"
				/>
				<RichText
					tagName="h3"
					onChange={ onChangeHeading }
					value={heading}
					placeholder={ __('Insert heading') }
					className="tailgrids-heading-text__content--heading"
				/>
				<RichText
					tagName="p"
					onChange={ onChangeCaption }
					value={caption}
					placeholder={ __('Insert caption') }
					className="tailgrids-heading-text__content--caption"
				/>
			</div>
		</section>
	);
}
