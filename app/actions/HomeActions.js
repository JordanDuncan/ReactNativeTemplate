/*
 * app/actions/HomeActions.js [SAMPLE FILE]
 * Shows how to define actions using redux-thunk to allow actions to dispatch other actions.
 * This is useful in scenarios like:
 *  - Clicking a button triggers downloadData
 *  - downloadData asyncronously calls an api and upon response, passes the data to downloadDataSuccess
 *  - downloadDataSuccess is linked to a reducer that updates the app state with the new data
 */

import { NavigationActions } from 'react-navigation';

import * as types from './types';

export function setString(str) {
  return function (dispatch) {
    dispatch(setStringSuccess('Simulating an api call...'));

    // this setTimeout is simulating an API call.
    setTimeout(() => {
      dispatch(setStringSuccess(str));
    }, 500);
  }
}

export function setStringSuccess(res) {
  return {
    type: types.SAMPLE_STRING,
    sampleString: res
  };
}