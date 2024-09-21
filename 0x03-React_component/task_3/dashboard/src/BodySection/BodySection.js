import PropTypes from 'prop-types';
import React from 'react';


export default function BodySection({title = ''}) {
	return (
		<div className="bodySection">
			<h2>{title}</h2>
			{this.props.children}
		</div>
	)
}

BodySection.propTypes = {
	title: PropTypes.string
}
