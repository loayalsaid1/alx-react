import * as actions from './uiActionTypes';

function login(email, password) {
  return {
    type: actions.LOGIN,
    user: {
      email,
      password,
    },
  };
}

function logout() {
  return {
    type: actions.LOGOUT,
  };
}

function displayNotificationDrawer() {
  return {
    type: actions.DISPLAY_NOTIFICATION_DRAWER,
  };
}

function hideNotificationDrawer() {
  return {
    type: actions.HIDE_NOTIFICATION_DRAWER,
  };
}

export { login, logout, displayNotificationDrawer, hideNotificationDrawer };
