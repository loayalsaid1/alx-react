import React, { useState } from "react";
import PropTypes, { symbol } from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  const [isChecked, setIsChanged] = useState(false)

  function handleChangeRowCheck(event) {
    if (event.target.checked) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }

  let cells;
  if (isHeader) {
    let className;
    let colSpan;
    if (!textSecondCell) {
      className = css([styles.headCell, styles.twoColomnHeadCell]);
      colSpan = 2;
    } else {
      className = css(styles.headCell);
    }
  

    cells = (
      <>
        <th className={className} colSpan={colSpan}>
          {textFirstCell}
        </th>

        {textSecondCell && <th className={className}>{textSecondCell}</th>}
      </>
    );
  } else {
    cells = (
      <>
        <td>
        <input type="checkbox" name="checkCourse" onChange={handleChangeRowCheck} />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  const rowClass = css(isHeader ? styles.headerRow : [styles.dataRow, (isChecked && styles.rowChecked)]);

  return <tr className={rowClass}>{cells}</tr>;
}

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },

  dataRow: {
    backgroundColor: "#f5f5f5ab",
  },

  twoColomnHeadCell: {
    textAlign: "center",
  },

  headCell: {
    borderBottom: "2px solid lightgray",
  },

  rowChecked : {
    backgroundColor: '#e6e4e4'
  }
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
