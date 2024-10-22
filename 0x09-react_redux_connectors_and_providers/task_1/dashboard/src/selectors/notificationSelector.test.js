import * as selectors from './notificationSelector';
import notificationReducer from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS } from 'immutable';

const notificationsList = [
  {
    id: 1,
    isRead: false,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    isRead: true,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    isRead: false,
    type: 'urgent',
    value: 'New data available',
  },
];
const normalizedNotifications = notificationsNormalizer(notificationsList);

describe('Notification selectors', () => {
  let initialState;

  beforeEach(() => {
    initialState = fromJS({
      notifications: normalizedNotifications,
      filter: 'DEFAULT',
    });
  });

  test('filterTypeSelected', () => {
    // I have no idea why i'm doing this honestly
    const state = notificationReducer(initialState);
    expect(selectors.filterTypeSelected(state)).toEqual('DEFAULT');
  });

  test('getNotifications', () => {
    const returnValue = selectors.getNotifications(initialState);
    const expectedValue = initialState.getIn([
      'notifications',
      'entities',
      'notifications',
    ]);

    expect(returnValue).toEqual(expectedValue);
  });

  test('getUnreadNotifications', () => {
    const returnValue = selectors.getUnreadNotifications(initialState);
    const expectedValue = notificationsList.filter(
      (item) => item.isRead === false
    );

    expect(returnValue.toList().toJS()).toEqual(expectedValue);
  });
});
