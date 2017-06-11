/*
 * app/reducers/HomeReducer.js
 * Defines an initial state and a reducer that will act differently depending on what type of action happens
 */

import * as types from 'app/actions/types';

const initialState = {
  sampleString : 'I\'m a default value from MainReducer.js'
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    // upon action with type SAMPLE_STRING, state will be modified to store its sampleString value
    case types.SAMPLE_STRING:
      return {
        ...state,
        sampleString: action.sampleString
      }
    default:
      return state
  }
}