import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom', () => {
	let wrapper;
	const testProps = {title: 'Test title', prop1: 'prop1', prop2: 'prop2'}
	beforeEach(() => {
		wrapper = shallow(
			<BodySectionWithMarginBottom {...testProps}>
				<p>Test p tag </p>
			</BodySectionWithMarginBottom>
		)
	})

	it("Renders a <BodeSection> inside and pass the props", () => {
		const bodySectionchild = wrapper.find(BodySection);
		expect(bodySectionchild.exists()).toBe(true);
		expect(bodySectionchild.props()).toEqual(expect.objectContaining({...testProps}));
	})
})
