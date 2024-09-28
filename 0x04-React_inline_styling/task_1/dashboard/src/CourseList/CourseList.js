import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import './CourseList.css';

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
        <table id="CourseList">
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

