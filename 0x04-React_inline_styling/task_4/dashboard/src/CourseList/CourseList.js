import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
    CourseListTable: {
        width: "100%",
        textAlign: "left",
        border: "1px solid lightgrey",
    }
});

function CourseList ({ listCourses = [] }) {
    const rows = listCourses.length
        ? listCourses.map( course => (
            <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
            />
        ))
        : <CourseListRow textFirstCell='No course available yet' />;

    return (
        <table id="CourseList" className={css(styles.CourseListTable)} > 
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}

export default CourseList;
