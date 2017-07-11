/*
 * app/routers/MainStack/config.js
 * Config file for MainStack.
 */

import { StackNavigator } from 'react-navigation';

import * as Screens from 'app/config/screens';

// configure the screens that will be accessible in this router
const routeConfiguration = {
  LogIn : {
    screen : Screens.LogIn
  }
};

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = { 
  headerMode: 'none',
  gesturesEnabled: true
};

export const AuthStack = StackNavigator(routeConfiguration, navigatorConfiguration);