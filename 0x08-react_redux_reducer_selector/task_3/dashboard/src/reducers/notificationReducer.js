import * as actions from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS: {
      const notifications = action.data.map((item) => {
        return { ...item, isRead: false };
      });

      return {
        ...state,
        notifications,
      };
    }

    case actions.MARK_AS_READ: {
      const notifications = state.notifications.map((item) => {
        if (item.id === action.index) return { ...item, isRead: true };
        else return { ...item };
      });

      return {
        ...state,
				notifications,
      };
    }

		case actions.SET_TYPE_FILTER: {
			const filter = action.filter;
			if (actions.NotificationTypeFilters.includes(filter)){
				return {
					...state,
					filter
				}
			} else {
				return state;
			}
		}

    default: {
      return state;
    }
  }
}
