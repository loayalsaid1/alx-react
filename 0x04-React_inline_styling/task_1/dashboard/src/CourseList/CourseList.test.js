import React from "react";
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from "./CourseListRow";
import '../suppressStyleInjection';


describe('<CourseList />', () => {
    let wrapper;
    const listCourses = [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
    ];

    beforeEach(() => {
        wrapper = shallow(<CourseList listCourses={listCourses}/>);
    });

    it('renders without crashing with empty or not at all listCourses', () => {
        shallow(<CourseList />);
        shallow(<CourseList listCourses={[]}/>);
    })

    it('renders correct count of rows', () => {
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    })
})
