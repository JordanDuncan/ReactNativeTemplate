/*
 * app/reducers/ContactsReducer.js
 * Defines an initial state and a reducer that will act differently depending on what type of action happens
 */

import * as types from 'app/actions/types';

const initialState = {
  contacts : []
};

export default function ContactsReducer(state = initialState, action) {
  switch (action.type) {
    // upon action with type UPDATE_CONTACTS, state will be modified to update contacts
    case types.UPDATE_CONTACTS:
      return {
        ...state,
        contacts: action.contacts
      }
    default:
      return state
  }
}