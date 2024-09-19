import React from 'react';
import PropTypes from 'prop-types';

export default function CourselistRow({ isHeader, textFirstCell, textSecondCell }) {
	let cells;
	if (isHeader) {
		if (textSecondCell) {
			cells = <>
				<th>{textFirstCell}</th>
				<th>{textSecondCell}</th>
			</>
		} else {
			cells = <th colSpan={2}>{textFirstCell}</th>
		}
	} else {
		cells = <>
			<td>{textFirstCell}</td>
			<td>{textSecondCell}</td>
		</>
	}
	
	return (
		<tr>{cells}</tr>
	)
}


CourselistRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.string	
}

CourselistRow.defaultProps = {
	isHeader: false,
	textSecondCell: null
}
