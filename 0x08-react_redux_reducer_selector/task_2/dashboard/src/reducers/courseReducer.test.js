import courseReducer, { initialState } from './courseReducer';
import * as actions from '../actions/courseActionTypes';
const courses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

describe('CourseReducer', () => {
  it('retunds an empty array by default', () => {
    expect(courseReducer()).toEqual([]);
  });

  it('retunds the data passed with the FETCH_COURSE_SUCCESS', () => {
    const expectedResult = courses.map((course) => ({
      ...course,
      isSelected: false,
    }));
		const action = {type: actions.FETCH_COURSE_SUCCESS, data: courses}
    expect(courseReducer(initialState, action)).toEqual(expectedResult);
  });

	it("SELECT COURSE", () => {
		const index = 1;
		const action = {type: actions.SELECT_COURSE, index};
		const expectedResult = courses.map((course) => {
			if (course.id === index) {
				return {...course, isSelected: true}
			}
			return {...course};
		})

		expect(courseReducer(courses, action)).toEqual(expectedResult);
	})

	it("UNSELECT COURSE", () => {
		const index = 1;
		const action = {type: actions.UNSELECT_COURSE, index};
		const expectedResult = courses.map((course) => {
			if (course.id === index) {
				return {...course, isSelected: false}
			}
			return {...course};
		})

		expect(courseReducer(courses, action)).toEqual(expectedResult);
	})
});
