import React from "react";
import { shallow } from "enzyme";

import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  describe("<CourseListRow isHeader=true", () => {
    it("Renders 1 cell with colSpan = 2 when no textSecondCell giving", () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="onc cell header" />
      );

      expect(wrapper.find("th")).toHaveLength(1);
      expect(wrapper.find("th").prop('colSpan')).toEqual(2);
    });

    it("Renders 2 when passing textFirstCell and textSecondCell", () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={true}
          textFirstCell="Head 1"
          textSecondCell="Head 2"
        />);

        
        expect(wrapper.find('th')).toHaveLength(2);

        expect(wrapper.childAt(0).text()).toBe('Head 1');
        expect(wrapper.childAt(1).text()).toBe('Head 2');
      
    });
  });


  describe("<CourseListRow isHeader=false />", () => {
    it("renders 2 cells in table body", () => {
      const wrapper = shallow(<CourseListRow
        textFirstCell="BodyCell 1"
        textSecondCell="BodyCell 2"
         />)
      
      expect(wrapper.find('td')).toHaveLength(2);
      expect(wrapper.childAt(0).text()).toBe('BodyCell 1');
      expect(wrapper.childAt(1).text()).toBe('BodyCell 2');
    })
  })
});
