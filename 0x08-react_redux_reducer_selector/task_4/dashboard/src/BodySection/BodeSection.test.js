import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import '../suppressStyleInjection';


describe('<BodySection />', () => {
	let wrapper;
	beforeEach(() => {
		const element = <BodySection title="Test title">
			<p>Test child</p>
		</BodySection>
		wrapper = shallow(element)
	})

	it('Renderes correctly the h2 title', () => {
		expect(wrapper.find('h2').length).toBeGreaterThan(0);
		expect(wrapper.text()).toMatch('Test title');
	})
	it('Renders correctly children passed to it', () => {
		expect(wrapper.contains(<p>Test child</p>)).toBe(true);
	})
})
