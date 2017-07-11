/*
 * app/reducers/MainStackReducer.js
 * Defines an initial state and a reducer that will act differently depending on what type of action happens.
 * Used to modify MainStack
 */

import { AUTH_LOGIN, AUTH_LOGOUT }  from 'app/actions/types';

import { NavigationActions } from 'react-navigation';

const initialState = {
  user : null
}

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: 
      return {
        ...state,
        user : {
          id : 123,
          name : 'Jordan'
        }
      }

    case AUTH_LOGOUT: 
      return {
        ...state,
        user : null
      }

    default: 
      return state;
  }
}