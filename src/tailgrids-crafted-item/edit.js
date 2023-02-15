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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { ColorPicker, PanelBody, PanelRow } from '@wordpress/components';


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
		className: "crafted-item"
	});

	const {
		attributes: {number, heading, caption, color, colorNumber}, setAttributes
	} = props;

	const onChangeNumber = (newNumber) => {
		setAttributes({ number: newNumber }); 
	}
	
	const onChangeHeading = (newHeading) => {
		setAttributes({ heading: newHeading });
	}

	const onChangeCaption = (newCaption) => {
		setAttributes({ caption: newCaption });
	}

	const styles = color && colorNumber ? { backgroundColor: color.hex, color: colorNumber.hex } : { backgroundColor: '#00000' };

	return (
		<div {...blockProps}>
			<div className="crafted-item__number">
				<div className="number-holder" style={styles}>
					<RichText
						onChange={onChangeNumber}
						value={number}
						placeholder="Insert list number"
					/>
				</div>
				{/* Order Background / Color Picker */}
				<InspectorControls>        
					<PanelBody
						title={ __('Color Picker For Order Number Background', 'tailgrids' ) }
						initialOpen={ true }
					>
						<PanelRow>
							<ColorPicker 
								color={ color }
								onChangeComplete={ (value) => setAttributes({color:value}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody
						title={ __('Color Picker For Border And Number', 'tailgrids' ) }
						initialOpen={ true }
					>
						<PanelRow>
							<ColorPicker 
								color={ color }
								onChangeComplete={ (value) => setAttributes({colorNumber:value}) }
							/>
						</PanelRow>
					</PanelBody>
                </InspectorControls>
			</div>
			<div className="crafted-item__text">
				<RichText
					tagName="h3"
					onChange={onChangeHeading}
					value={heading}
					placeholder="Insert item title"
					/>
				<RichText
					tagName="p"
					onChange={onChangeCaption}
					value={caption}
					placeholder="Insert item captionr"
				/>
			</div>
		</div>
	);
}
