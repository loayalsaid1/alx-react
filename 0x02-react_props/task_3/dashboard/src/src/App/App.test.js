import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

describe('<App />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})

	it("Renders Notifications componenet", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.containsMatchingElement(<Notifications />)).toBe(true);
	})

	it("Renders <Header /> componenet", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
	})

	it("Renders <Login /> componenet", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
	})

	it("Doesn't render <CourseList /> by default", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.containsMatchingElement(<CourseList />)).toBe(false);
	})

	describe('<App isLoggedIn=true', () => {
		it("Doesnt' renders <Login />", () => {
			const wrapper = shallow(<App isLoggedIn={true} />);
			expect(wrapper.containsMatchingElement(<Login />)).toBe(false);
		})
		
		it("Renders <CourseList />", () => {
			const wrapper = shallow(<App isLoggedIn={true} />);
			// I need to know exactly when to use "contains" and "containsMatchingElement"
			expect(wrapper.contains(<CourseList />)).toBe(true)
		})
	})

	it("Renders <Footer /> componenet", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.containsMatchingElement(<Footer />)).toBe(true);
	})
})
