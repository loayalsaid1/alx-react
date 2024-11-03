import * as actions from './notificationActionTypes';

function markAsRead() {
  return {
    type: actions.MARK_AS_READ,
  };
}

function setTypeFilter(filter) {
  return {
    type: actions.SET_TYPE_FILTER,
    filter,
  };
}

export { markAsRead, setTypeFilter };
