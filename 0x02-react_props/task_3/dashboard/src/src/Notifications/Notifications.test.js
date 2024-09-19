import React from "react";
import { shallow } from "enzyme";

import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
describe("<Notifications />", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it("Renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders 3 <NotificationItem /> elements", () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Contains phrase"Here is the list of notifications"', () => {
    const text = "Here is the list of notifications";
    expect(wrapper.contains(text)).toBe(true);
  });

  // note: this is usually not the best way to write tests, but sometimes necessary when you don’t control the child component
  it("First Notification item has correct HTML", () => {
    expect(wrapper.find(NotificationItem).first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

}); 

describe("Visibility of elements based on <displaydrawer prop", () => {
  it('renders .menuitem and NOT .Notifications => <displayDrawer> = true', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  })
  
  it('Renders .menuItem AND .Notifications => <displayDrawer> false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);      
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  })
})
