import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
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

	it("Renders <Footer /> componenet", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.containsMatchingElement(<Footer />)).toBe(true);
	})
})
