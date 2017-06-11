/*
 * app/routers/MainTabs/config.js
 * Config file for MainTabs.
 */

import { TabNavigator } from 'react-navigation';

import { colors } from 'app/config/styles';

import * as Screens from 'app/config/screens';

const routeConfiguration = {
  Home : { 
    screen: Screens.Home
  },
  ContactList : { 
    screen: Screens.ContactList
  }
};

const navigatorConfiguration = { 
  lazy : true,
  backBehavior: 'none',
  tabBarOptions : {
    activeTintColor : colors.primary
  }
};

export const MainTabs = TabNavigator(routeConfiguration, navigatorConfiguration);