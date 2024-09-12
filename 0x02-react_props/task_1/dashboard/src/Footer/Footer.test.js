import React from "react";
import { ReactWrapper, shallow } from 'enzyme';
import Footer from './Footer';

describe("<Footer />", () => {
	it("Rendres without creashing", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBe(true);
	})

	it("Contains at least the Word 'Copyright'", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.contains('Copyright')).toBe(true);
	})
})
