import { Map, merge } from 'immutable';
import * as actions from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: [],
  filter: 'DEFAULT',
});

export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS: {
      const notifications = action.data.map((item) => {
        return { ...item, isRead: false };
      });

      return merge(state, {
        notifications: notificationsNormalizer(notifications),
      });
    }

    case actions.MARK_AS_READ: {
      return state.setIn(
        ['notifications', 'entities', 'notifications', action.index, 'isRead'],
        true
      );
    }

    case actions.SET_TYPE_FILTER: {
      const filter = action.filter;
      if (actions.NotificationTypeFilters.includes(filter)) {
        return state.set('filter', filter);
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
}
