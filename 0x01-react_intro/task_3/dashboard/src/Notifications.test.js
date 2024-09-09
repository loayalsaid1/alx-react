import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';


describe('<Notifications />', () => {
	it('Renders without crashing', () => {
		shallow(<Notifications />);
	})

	it('renders 3 li elements', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('li')).toHaveLength(3);
	})

	it('Contains phrase"Here is the list of notifications"', () => {
		const wrapper = shallow(<Notifications />);
		const text = 'Here is the list of notifications'
		expect(wrapper.contains(text)).toBe(true);
	})
})
