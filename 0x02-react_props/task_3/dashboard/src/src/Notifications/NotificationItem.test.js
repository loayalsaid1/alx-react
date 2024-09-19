import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("<NotificationItem />", () => {
	it("Renders without crasing", () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it("renders correct HTML with dummy type and value props", () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
	});

	it("Renders coorrect HMTL with passing html prop", () => {
		const wrapper = shallow(<NotificationItem type="default" html={{__html: '<u>test</u>'}}/>);
		expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
	})
	
})
