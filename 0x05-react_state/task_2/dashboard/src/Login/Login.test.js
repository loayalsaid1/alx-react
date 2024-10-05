import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import "../suppressStyleInjection";

describe("<Login />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  it("Renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Rendsrs 2 labels", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });

  it("Rendsrs 2 <input> elements and one input type={submit}", () => {
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    expect(wrapper.find('input[type="submit"]').exists()).toBe(true);
  });

  it("Have submit button disables by default", () => {
    const submitButton = wrapper.find('form input[type="submit"]');

    expect(submitButton.prop("disabled")).toBe(true);
  });

  it("Enable the submit button when there the 2 inputs are not empty", () => {
    let submitButton;

    const emailInput = wrapper.find('form input[type="email"]');
    const passwordInput = wrapper.find('form input[type="password"]');
    submitButton = wrapper.find('form input[type="submit"]');

    emailInput.simulate("change", { target: { value: "lorem ipsum" } });
    expect(submitButton.prop("disabled")).toBe(true);

    passwordInput.simulate("change", { target: { value: "lorem ipsum" } });
    // I have to do this, because when i simulate a change. i rerender,
    // which means that the reference i had to the button is now for the old
    // state
    submitButton = wrapper.find('form input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(false);
  });
});
