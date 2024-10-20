import React from "react";
import { mount } from "enzyme";
import Header from "./Header";
import UserContext, { defaultLogOut, defaultUser } from "../App/AppContext";
import "../suppressStyleInjection";

describe("<Header />", () => {
  const testUser = {
    email: "test@mail.com",
    password: "remindme-l.vercel.app",
    isLoggedIn: true,
  };
  let wrapper;
	let logOutMock;
  beforeEach(() => {
		logOutMock = jest.fn(defaultLogOut);
    const contextValue = { user: testUser, logOut: logOutMock };

    wrapper = mount(
      <UserContext.Provider value={contextValue}>
        <Header />
      </UserContext.Provider>
    );
  });

  it("Renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Renders <img> tag", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("Renders <h1> tag", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("Doesn't render logout section when user is not logged in", () => {
    const contextValue = { user: defaultUser, logOut: defaultLogOut };
    const wrapper = mount(
      <UserContext.Provider value={contextValue}>
        <Header />
      </UserContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
  });

  it("Renderes logout serction when user is loggedin", () => {
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
  });

  it("Logout correctly in the logoutSection", () => {

    wrapper.find("#logoutSection a").simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });
});
