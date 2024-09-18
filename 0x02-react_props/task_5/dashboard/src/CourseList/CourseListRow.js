import React from "react";
import PropTypes from "prop-types";

function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null }) {
  let cells;
  if (isHeader) {
    cells = (
      <>
        <th colSpan={textSecondCell ? 1 : 2}>{textFirstCell}</th>
        {textSecondCell && <th>{textSecondCell}</th>}
      </>
    );
  } else {
    cells = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  return (
    <tr>{cells}</tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;

