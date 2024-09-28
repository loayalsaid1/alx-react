import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import '../suppressStyleInjection';

describe("<CourseListRow />", () => {
  describe("when isHeader is true", () => {
    it("renders one cel with colspan = 2 when no second cell", () => {
      const wrapper = shallow(<CourseListRow isHeader textFirstCell="test" />);
      expect(wrapper.find("th").prop("colSpan")).toBe(2);
    });

    it("renders two cells correctly", () => {
      const wrapper = shallow(
        <CourseListRow isHeader textFirstCell="test" textSecondCell="test2" />
      );
      expect(wrapper.find("th").length).toBe(2);
    });
  });

  it("When isHeader=false renders two cells", () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="test" textSecondCell="test2" />
    );
    expect(wrapper.find("td").length).toBe(2);
  });
});
