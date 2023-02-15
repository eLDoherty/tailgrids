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
export default function Edit(props) {

	const blockPops = useBlockProps({
		className: 'tailgrids-team'
	});

	const {
		attributes: { teams, subheading, heading, caption }, setAttributes
	} = props;



	return (
		<section {...blockPops}>
			<RichText
				onChange={(newSbuheading) => setAttributes({ subheading: newSbuheading })}
				value={subheading}
				placeholder="Subheading"
				tagName="h4"
				className="tailgrids-team__subheading"
			/>
			<RichText
				onChange={(newHeading) => setAttributes({ heading: newHeading })}
				value={heading}
				placeholder="Heading"
				tagName="h2"
				className="tailgrids-team__heading"
			/>
			<RichText
				onChange={(newCaption) => setAttributes({ caption: newCaption })}
				value={caption}
				placeholder="Caption"
				tagName="p"
				className="tailgrids-team__caption"
			/>
			<div className="team-wrapper">
				<ContentPicker
					onPickChange={(pickedContent) => {
						setAttributes({ teams: pickedContent })
					}}
					content={teams || []}
					label={"Please select team you want to show:"}
					contentTypes={['teams']}
					maxContentItems={4}
					isOrderable={true}
				/>
			</div>
		</section>
	);
}
