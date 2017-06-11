/*
 * app/reducers/MainTabsReducer.js
 * Defines an initial state and a reducer that will act differently depending on what type of action happens
 * Used to modify MainTabs
 */

import { MainTabs } from 'app/routers/MainTabs/config';

const initialState = MainTabs.router.getStateForAction(
  MainTabs.router.getActionForPathAndParams('Home')
);

export default function MainTabsReducer(state = initialState, action) {
  switch (action.type) {
    default: 
      return MainTabs.router.getStateForAction(action, state);
  }
}