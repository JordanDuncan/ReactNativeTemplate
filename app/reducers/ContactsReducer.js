/*
 * app/reducers/ContactsReducer.js
 * Defines an initial state and a reducer that will act differently depending on what type of action happens
 */

import * as types from '../actions/types';

const initialState = {
  contacts : [],
  refreshing : false
};

export default function ContactsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CONTACTS_REFRESHING:
      return {
        ...state,
        refreshing : true
      }
    // upon action with type CONTACTS_UPDATE, state will be modified to update contacts
    case types.CONTACTS_UPDATE:
      return {
        ...state,
        contacts : action.contacts,
        refreshing : false
      }
    default:
      return state
  }
}