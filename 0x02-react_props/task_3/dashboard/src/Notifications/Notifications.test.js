import React from "react";
import { shallow } from "enzyme";

import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  it("Renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders 3 <NotificationItem /> elements", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Contains phrase"Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = "Here is the list of notifications";
    expect(wrapper.contains(text)).toBe(true);
  });

  // note: this is usually not the best way to write tests, but sometimes necessary when you don’t control the child component
  it("First Notification item has correct HTML", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
});
