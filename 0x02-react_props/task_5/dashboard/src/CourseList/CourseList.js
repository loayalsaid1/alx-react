import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList ({ listCourses = [] }) {
    if (listCourses) {
        const rows = <CourseListRow textFirstCell='No course available yet' />;
    } else {
        const rows = listCourses.map( course => {
            <CourseListRow id={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        })
    }

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
