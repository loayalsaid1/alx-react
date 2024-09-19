import React from 'react'
import { render, shallow } from 'enzyme';
import CourseList from './CourseList';
import CourselistRow from './CourseListRow';

describe('<CourseList />', () => {
	it("Renders without crashing", () => {
		expect(shallow(<CourseList />).exists()).toBe(true);
	})

	it("Renders 5 different rows", () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find(CourselistRow)).toHaveLength(5);
	})
})

