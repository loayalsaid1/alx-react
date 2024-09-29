import React from "react";
import { shallow } from "enzyme";
import '../suppressStyleInjection';
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "default", value: "New resume available" },
    { id: 3, type: "urgent", value: "New whatever" },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
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

  describe("Visibility of elements based on <displaydrawer prop", () => {
    it("renders .menuitem and NOT .Notifications => <displayDrawer> = true", () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find(".menuItem").exists()).toBe(true);
      expect(wrapper.find(".Notifications").exists()).toBe(false);
    });

    it("Renders .menuItem AND .Notifications => <displayDrawer> false", () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find(".menuItem").exists()).toBe(true);
      expect(wrapper.find(".Notifications").exists()).toBe(true);
    });
  });

  describe("<Notifications /> render and Re-render behaviour", () => {
    const listNotifications = [
      { id: 0, value: "test 1", type: "default" },
      { id: 1, value: "test 2", type: "default" },
    ];

    let wrapper;
    let renderSpy;
    beforeEach(() => {
      wrapper = shallow(<Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />);
      renderSpy = jest.spyOn(wrapper.instance(), 'render');

    });

    afterEach(() => {
      renderSpy.mockRestore();
    })

    it('Doesn\'t Re-renders with same or shorter listNOtifications prop', () => {
      wrapper.setProps({listNotifications: listNotifications});
      expect(renderSpy).not.toHaveBeenCalled();
    })

    it('Re-renders when passed a longer listNotifications that orgiginal',  () => {
      const extendedListNotifications = [...listNotifications, {id: 2, value: 'test 3', type: 'default'}];
      wrapper.setProps({listNotifications: extendedListNotifications});
      expect(renderSpy).toHaveBeenCalled();
    })
  });
});
