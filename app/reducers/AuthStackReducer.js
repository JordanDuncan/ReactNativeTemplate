/*
 * app/reducers/AuthStackReducer.js
 * Defines an initial state and a reducer that will act differently depending on what type of action happens.
 * Used to modify AuthStack
 */

import { NavigationActions } from 'react-navigation';
import { AuthStack } from 'app/routers/AuthStack/config';

const initialState = AuthStack.router.getStateForAction(
  AuthStack.router.getActionForPathAndParams('LogIn')
);

export default function AuthStackReducer(state = initialState, action) {
  switch (action.type) {
    default: 
      return state;
  }
}