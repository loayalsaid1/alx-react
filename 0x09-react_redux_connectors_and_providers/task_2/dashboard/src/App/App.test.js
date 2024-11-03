
import React from "react";
import { mount, shallow } from 'enzyme';
import { act } from 'react';
import { defaultUser} from "./AppContext";
import { App, mapStateToProps } from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { mockListNotifications } from "../mockData";
import '../suppressStyleInjection';
import { fromJS } from 'immutable';


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

  describe("When user is Logged in", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App/>);
      act(() => {

        wrapper.setState({
          user: {
            email: 'test@mail.com',
            password: 'testPassword',
            isLoggedIn: true,
          }
        })
      })
    });

    it("<Login /> not rendered", () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it("CourseList included", () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });

	it('Alert the user and call logOut when clicking ctrl+h', () => {
    const testUser = {
      email: 'test@mail.example',
      password: 'testPassword',
      isLoggedIn: true,
    }

    const wrapper = mount(<App />);
    act(() => {

      wrapper.setState({
        user: {...testUser},
      })
    })
    const logOutFuncMock = jest.spyOn(wrapper.state(), 'logOut');
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const event = new KeyboardEvent('keydown', {code: 'KeyH', ctrlKey: true});
    window.dispatchEvent(event);

    
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOutFuncMock).toHaveBeenCalled();

    alertSpy.mockRestore();
	})

  it('logIn function updates the state correctly', () => {
    wrapper.instance().logIn('test@mail.com', 'remindme-l.vercel.app');
    expect(wrapper.state().user).toEqual({
      email: 'test@mail.com',
      password: 'remindme-l.vercel.app',
      isLoggedIn: true,
    })
  })

  it('Updates the state correctly when calling logout', () => {
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual({
      ...defaultUser,
    })
  })

  it("Updates the state correctly when calling markNotificationAsRead", () => {
    wrapper.setState({ listNotifications: [...mockListNotifications]});

    const listLength = mockListNotifications.length;
    // Assuming the list is ordered by objects IDs
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state('listNotifications')).toEqual(mockListNotifications.slice(1));
  })
});

describe("App => mapStateToProps", () => {
  it('Returns correct object', () => {
    let state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    })

    const props = {isLoggedIn: true, displayDrawer: true}
    expect(mapStateToProps(state)).toEqual(props);
  })
})
