import * as actions from './notificationActionTypes';
import { bindActionCreator } from 'redux';

function markAsRead(index) {
  return {
    type: actions.MARK_AS_READ,
    index,
  };
}

function setTypeFilter(filter) {
  return {
    type: actions.SET_TYPE_FILTER,
    filter,
  };
}

const boundNotificationActionCreators = (dispatch) =>
  bindActionCreator(
    {
      markAsRead,
      setTypeFilter,
    },
    dispatch
  );

export { markAsRead, setTypeFilter, boundNotificationActionCreators };
