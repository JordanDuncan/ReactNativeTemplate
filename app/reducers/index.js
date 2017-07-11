/*
 * app/reducers/index.js
 * Combines all your reducers.
 * You should import all your xReducer.js files and add them to the combineReducer argument
 */

import { combineReducers } from 'redux';

// import your reducers here
import AuthStack from './AuthStackReducer';
import MainStack from './MainStackReducer';
import MainTabs from './MainTabsReducer';

import Auth from './AuthReducer';

import Home from './HomeReducer';
import Contacts from './ContactsReducer';

const reducer = combineReducers({
  AuthStack,
  MainStack,
  MainTabs,
  Auth,
  Home,
  Contacts
  // add your reducers here
});

export default reducer;