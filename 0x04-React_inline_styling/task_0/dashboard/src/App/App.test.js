import React from "react";
import { mount, shallow } from 'enzyme';

import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";

describe("<App />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />)
	})
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Renders Notifications componenet", () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);

    // This for somereason related to Jest is not working when using 
    //  class components with shallow rendering, unliss you use mount
    // expect(wrapper.containsMatchingElement(<Notifications />)).toBe(true);
  });

  it("Renders <Header /> componenet", () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });

  it("Renders <Login /> componenet", () => {
    expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
  });

  it("Renders <Footer /> componenet", () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toBe(true);
  });

  it("CourseList not displayed by default", () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  describe("When isLoggedIn=true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });
    it("<Login /> not rendered", () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it("CourseList included", () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });

	it('Alert the user and call logOut when clicking ctrl+h', () => {
		const logOutFuncMock = jest.fn();
    const wrapper = mount(<App logOut={logOutFuncMock} isLoggedIn={true} />);

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const event = new KeyboardEvent('keydown', {code: 'KeyH', ctrlKey: true});
    window.dispatchEvent(event);

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOutFuncMock).toHaveBeenCalled();

    alertSpy.mockRestore();
	})

});
