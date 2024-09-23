import PropTypes from 'prop-types';
import React from 'react';


export default function BodySection(props) {
	const {title} = props;
	return (
		<div className="bodySection">
			<h2>{title}</h2>
			{props.children}
		</div>
	)
}

BodySection.propTypes = {
	title: PropTypes.string
}

