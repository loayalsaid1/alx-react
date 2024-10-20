import React from "react";
import { mount, shallow } from "enzyme";
import Footer from "./Footer";
import UserContext from "../App/AppContext";
import { mockUserContextValue, mockLoggedOutUserContextValue } from "../mockData";
import "../suppressStyleInjection";

describe("<Footer />", () => {
  it("Rendres without creashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Contains at least the Word 'Copyright'", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });

  it("Doesn't render Contct us phararaph when user is not logged in", () => {
    const wrapper = mount(
      <UserContext.Provider value={mockLoggedOutUserContextValue}>
        <Footer />
      </UserContext.Provider>
    );
    expect(wrapper.find('[data-testid="contactUsParagraph"]').exists()).toBe(false);
  });

  it("Renders Contact us paractaph when user logged in", () => {
		const wrapper = mount(
      <UserContext.Provider value={mockUserContextValue}>
        <Footer />
      </UserContext.Provider>
    );

    expect(wrapper.find('[data-testid="contactUsParagraph"]').exists()).toBe(true);
	});

});
