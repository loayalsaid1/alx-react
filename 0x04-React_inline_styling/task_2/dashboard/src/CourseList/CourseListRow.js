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
  
  const styles = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  }

  return (
    <tr style={styles} >{cells}</tr>
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
