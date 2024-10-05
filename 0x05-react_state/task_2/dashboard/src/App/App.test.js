import React from "react";
import { mount, shallow } from 'enzyme';
import { act } from 'react';
import { defaultUser} from "./AppContext";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import '../suppressStyleInjection';

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

  describe('Test displayDrawer state and functionality', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    }) 

    it("Has displayDrawer state, with false as default value", () => {
      expect(wrapper.state('displayDrawer')).toBe(false);
    })

    it("Make displayDrawer true when calling handleDisplayDrawer", () => {
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state('displayDrawer')).toBe(true);
    })

    it("Make displayDrawer false when calling handleHideDrawer", () => {
      wrapper.instance().handleHideDrawer();
      expect(wrapper.state('displayDrawer')).toBe(false);
    })
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

});
