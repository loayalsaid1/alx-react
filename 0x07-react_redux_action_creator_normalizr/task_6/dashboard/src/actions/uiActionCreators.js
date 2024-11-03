import * as actions from './uiActionTypes';
import { bindActionCreator } from 'redux';

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

const boundUIActionCreators = (dispatch) =>
  bindActionCreator(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
    },
    dispatch
  );

export {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  boundUIActionCreators,
};
