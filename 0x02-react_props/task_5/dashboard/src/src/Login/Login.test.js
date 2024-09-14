import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe("<Login />", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<Login />);

		expect(wrapper.exists()).toBe(true);
	})

	it("Rendsrs 2 labels", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('label')).toHaveLength(2);
	})

	it("Rendsrs 2 <input> elements", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input')).toHaveLength(2);
	});
})
