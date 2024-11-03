import courseReducer, { initialState } from './courseReducer';
import coursesNormalizer from '../schema/courses.js';
import * as actions from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { normalize } from 'normalizr';
const courses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
    isSelected: false,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
    isSelected: true,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
    isSelected: false,
  },
];

describe('CourseReducer', () => {
  it('retunds the initialState when now actions given', () => {
    expect(courseReducer()).toEqual(initialState);
  });

  it('retunds the data passed with the FETCH_COURSE_SUCCESS', () => {
    const expectedResult = courses.map((course) => ({
      ...course,
      isSelected: false,
    }));
    const action = { type: actions.FETCH_COURSE_SUCCESS, data: courses };
    let testedValue = courseReducer(initialState, action).toJS().entities
      .courses;
    testedValue = Object.values(testedValue);
    expect(testedValue).toEqual(expectedResult);
  });

  it('SELECT COURSE', () => {
    const index = 1;
    const action = { type: actions.SELECT_COURSE, index };
    const initialState = Map(coursesNormalizer(courses));

    const resultState = courseReducer(initialState, action).toJS();
    expect(resultState.entities.courses[index].isSelected).toBe(true);
  });

  it('UNSELECT COURSE', () => {
    const index = 2;
    const action = { type: actions.UNSELECT_COURSE, index };
    const initialState = Map(coursesNormalizer(courses));

    const resultState = courseReducer(initialState, action).toJS();
    expect(resultState.entities.courses[index].isSelected).toBe(false);
  });
});
