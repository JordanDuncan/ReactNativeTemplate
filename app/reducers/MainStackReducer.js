/*
 * app/reducers/MainStackReducer.js
 * Defines an initial state and a reducer that will act differently depending on what type of action happens.
 * Used to modify MainStack
 */

import { STACK_NAV_BACK, STACK_NAV_PUSH }  from 'app/actions/types';

import { NavigationActions } from 'react-navigation';
import { MainStack } from 'app/routers/MainStack/config';

const initialState = MainStack.router.getStateForAction(
  MainStack.router.getActionForPathAndParams('MainTabs')
);

export default function MainStackReducer(state = initialState, action) {
  switch (action.type) {
    case STACK_NAV_BACK: 
      const navigationAction = NavigationActions.back({});
      return MainStack.router.getStateForAction(navigationAction, state);
    
    case STACK_NAV_PUSH:
      return MainStack.router.getStateForAction(action.nav, state);

    default: 
      return MainStack.router.getStateForAction(action, state);
  }
}