/*
 * app/routers/MainStack/config.js
 * Config file for MainStack.
 */

import { StackNavigator } from 'react-navigation';

import * as Screens from 'app/config/screens';
import MainTabs from 'app/routers/MainTabs';

// configure the screens that will be accessible in this router
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
  headerMode: 'none'
};

export const MainStack = StackNavigator(routeConfiguration, navigatorConfiguration);