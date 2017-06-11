/*
 * app/reducers/index.js
 * Combines all your reducers.
 * You should import all your xReducer.js files and add them to the combineReducer argument
 */

import { combineReducers } from 'redux';

// import your reducers here
import MainTabs from './MainTabsReducer';
import MainStack from './MainStackReducer';

import Home from './HomeReducer';
import Contacts from './ContactsReducer';

const reducer = combineReducers({
  MainStack,
  MainTabs,
  Home,
  Contacts
  // add your reducers here
});

export default reducer;