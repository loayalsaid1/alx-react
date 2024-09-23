import React from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'

export default function BodySectionWithMarginBottom(props) {
	return (
		<div className="bodySectionWithMargin">
			<BodySection {...props} title={props.title}>
				{props.children}
			</BodySection>
		</div>
	)
}

