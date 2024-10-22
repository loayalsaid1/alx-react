import * as actions from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { default as coursesNormalizer } from '../schema/courses';
export const initialState = Map({});

export default function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(
        action.data.map((course) => ({ ...course, isSelected: false }))
      );
      return state.merge(normalizedData);
    }

    case actions.SELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index, 'isSelected'],
        true
      );
    }

    case actions.UNSELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index, 'isSelected'],
        false
      );
    }

    default: {
      return state;
    }
  }
}
