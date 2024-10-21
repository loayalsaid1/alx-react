import * as uiActionsTypes from '../actions/uiActionTypes';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
import { SELECT_COURSE } from '../actions/courseActionTypes';

import uiReducer, { initialState } from './uiReducer';

describe('uiReducer', () => {
  it('Returnds the initial state when no actions passed', () => {
    expect(uiReducer()).toEqual(initialState);
  });

  it('returnds the initialState when SELECT_COURSE action is passed', () => {
    const action = { type: SELECT_COURSE, index: 0 };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it('Returns updated state when passing DISPLAY_NOTIFICATION_DRAWER', () => {
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
  });
});
