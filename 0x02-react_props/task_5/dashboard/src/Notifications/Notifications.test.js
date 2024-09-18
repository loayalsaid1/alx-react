import React from "react";
import { shallow } from "enzyme";

import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  let wrapper;
  const testNotificationItems = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'default', value: 'test2'},
    {id: 3, type: 'urgent', value: 'test3'},
  ]
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={testNotificationItems}/>);
  })

  it("Renders without crashing with empty or without <listNotifications> prop", () => {
    shallow(<Notifications />);
    shallow(<Notifications listNotifications={[]}/>);
  });

  it('Renders correct message when passed an empty notifications list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
    const wrongeText = 'Here is the list of notifications';
    const correctText = 'No new notification for now';

    expect(wrapper.contains(wrongeText)).toBe(false);
    expect(wrapper.find('.Notifications').html()).toContain(correctText);
  })
  it("renders correct count of <NotificationItem /> elements when passed list of notifications", () => {
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

  it("Renders .menuItem AND .Notifications when displayDrawer = true", () => {
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  })
  
  it('Renderes .menuItem and NOT .Notifications when displayDrawer=false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  })


})
