import fetchMock from 'jest-fetch-mock';
import configureMockStore from 'redux-mock-store';
import {thunk} from 'redux-thunk'
import * as actions from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest
} from './uiActionCreators';
fetchMock.enableMocks();


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



describe('loginRequest', () => {
  const mockStore = configureMockStore([thunk]);  

  // beforeEach(() => {
  //   fetchMock.restore();
  // })

  test('Success login request dispatches LOGIN and LOGIN_SUCCESS request', () => {
    const email = 'testMail';
    const password = 'testPassword';
    const expectedActions = [
      {type: actions.LOGIN, user: {email, password}},
      {type: actions.LOGIN_SUCCESS},
    ]
    const store = mockStore({});

    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 });

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })

  })

  test('Failure login request dispatches LOGIN and LOGIN_FAILURE actions', () => {
    const email = 'testMail';
    const password = 'testPassword';
    const expectedActions = [
      { type: actions.LOGIN, user: { email, password } },
      { type: actions.LOGIN_FAILURE },
    ];
    const store = mockStore({});

    // Mock the fetch response for a failed login
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 401 }); // Simulate a 401 Unauthorized error

    // Dispatch the loginRequest action and check the dispatched actions
    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
})
