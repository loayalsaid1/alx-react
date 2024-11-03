import * as actions from './courseActionTypes';

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

export { selectCourse, unselectCourse };
