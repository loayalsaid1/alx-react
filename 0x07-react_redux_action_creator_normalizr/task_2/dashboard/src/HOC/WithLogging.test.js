import React from 'react'
import { mount, unmount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';


describe('WithLogging()', () => {
	const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
	afterAll(() => {
		logSpy.mockRestore()
	})

	it('Logs correctly on moutning and unmounting pure HTML components', () => {
		const Enhancedcomponent = WithLogging(
			() => <p>the-fog-is-lifting.pages.dev</p>
		);

		const wrapper = mount(<Enhancedcomponent />);
		expect(logSpy).toHaveBeenCalledWith('Component Component is mounted');

		wrapper.unmount();
		expect(logSpy).toHaveBeenCalledWith('Component Component is going to unmount');
	})

	it('logs on mount and unmount correctly with React Components e.g LogIn', () => {
		const Enhancedcomponent = WithLogging(Login);

		const wrapper = mount(<Enhancedcomponent />);
		expect(logSpy).toHaveBeenCalledWith('Component Login is mounted');

		wrapper.unmount();
		expect(logSpy).toHaveBeenCalledWith('Component Login is going to unmount');
	})

})
