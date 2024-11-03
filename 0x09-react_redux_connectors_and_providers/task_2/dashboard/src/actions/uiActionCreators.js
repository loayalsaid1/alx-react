import * as actions from './uiActionTypes';
import { bindActionCreators } from 'redux';

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

function loginSuccess() {
  return {
    type: actions.LOGIN_SUCCESS,
  };
}

function loginFailure() {
  return {
    type: actions.LOGIN_FAILURE,
  };
}

function loginRequest(email, password) {
  // login
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      if( response.ok ) {
        dispatch(loginSuccess());
      } else {
        throw new Error('LoginFailure');
      }
    } catch {
      dispatch(loginFailure())
    }
  }
}

const boundUIActionCreators = (dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
      loginSuccess,
      loginFailure,
    },
    dispatch
  );

export {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
  boundUIActionCreators,
};
