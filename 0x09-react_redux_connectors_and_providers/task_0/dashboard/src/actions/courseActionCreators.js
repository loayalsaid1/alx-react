import * as actions from './courseActionTypes';
import { bindActionCreator } from 'redux';

function selectCourse(index) {
  return {
    type: actions.SELECT_COURSE,
    index,
  };
}

function unselectCourse(index) {
  return {
    type: actions.UNSELECT_COURSE,
    index,
  };
}

const boundCourseActionCreators = (dispatch) => {
  bindActionCreator({ selectCourse, unselectCourse }, dispatch);
};

export { selectCourse, unselectCourse, boundCourseActionCreators };
