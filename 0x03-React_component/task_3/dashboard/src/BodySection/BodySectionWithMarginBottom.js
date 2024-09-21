import React from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'
export default function BodySectionWithMarginBottom() {
	reutnr (
		<div className="bodySectionWithMargin">
			<BodySection {...this.props}>
				{this.props.children}
			</BodySection>
		</div>
	)
}
