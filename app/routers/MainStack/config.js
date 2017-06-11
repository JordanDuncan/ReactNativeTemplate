/*
 * app/routers/MainStack/config.js
 * Config file for MainStack.
 */

import { StackNavigator } from 'react-navigation';

import * as Screens from 'app/config/screens';
import MainTabs from 'app/routers/MainTabs';

// this is where you define all the screens that will be part of this router
const routeConfiguration = {
  MainTabs : { 
    screen: MainTabs 
  },
  ContactDetail : { 
    screen: Screens.ContactDetail
  }
};

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = { 
  initialRouteName: 'MainTabs',
  headerMode: 'none'
};

export const MainStack = StackNavigator(routeConfiguration, navigatorConfiguration);