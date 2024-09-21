import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('<Header />', () => {
	it('Renders without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Renders <img> tag', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper.find('img')).toHaveLength(1);
	})

	it("Renders <h1> tag", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('h1')).toHaveLength(1);
	})
})
