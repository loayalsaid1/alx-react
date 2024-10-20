import * as actions from '../actions/courseActionTypes';

const initialState = [];

export default function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.FETCH_COURSE_SUCCESS: {
      return action.data.map((course) => ({ ...course, isSelected: false }));
    }
		case actions.SELECT_COURSE: {
			return state.map(course => {
				if (course.id === action.index) {
					return { ...course, isSelected: true}
				}
				return {...course}
			})
		}
		case actions.UNSELECT_COURSE: {
			return state.map(course => {
				if (course.id === action.index) {
					return { ...course, isSelected: false}
				}
				return {...course}
			})
		}
		
    default: {
      return state;
    }
  }
}
