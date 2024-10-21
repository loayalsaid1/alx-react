import { markAsRead, setTypeFilter } from './notificationActionCreators';
import * as actions from './notificationActionTypes';

describe('Notification action creators', () => {
  test('markAsRead', () => {
    const expectedAction = {
      type: actions.MARK_AS_READ,
    };

    expect(markAsRead()).toEqual(expectedAction);
  });

	test('setFilterType', () => {
		const filter = actions.NotificationTypeFilters[0]  // 'DEFAULT'
		const expectedAction = {
			type: actions.SET_TYPE_FILTER,
			filter
		}

		expect(setTypeFilter(filter)).toEqual(expectedAction);
	})
});
