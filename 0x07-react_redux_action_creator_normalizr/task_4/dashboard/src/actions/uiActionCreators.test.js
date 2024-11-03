import * as actions from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('UI Action Creators', () => {
  test('login', () => {
    const email = 'remindme-l.vercel.app';
    const password = 'the-fog-is-lifting.pages.dev';

    const expectedAction = {
      type: actions.LOGIN,
      user: {
        email,
        password,
      },
    };

    expect(login(email, password)).toEqual(expectedAction);
  });

  test('logout', () => {
    const expectedAction = {
      type: actions.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  test('displayNotificationDrawer', () => {
    const expectedAction = {
      type: actions.DISPLAY_NOTIFICATION_DRAWER,
    };

    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  test('hideNotificationDrawer', () => {
    const expectedAction = {
      type: actions.HIDE_NOTIFICATION_DRAWER,
    };

    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
