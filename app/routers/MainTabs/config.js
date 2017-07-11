/*
 * app/routers/MainTabs/config.js
 * Config file for MainTabs.
 */

import { TabNavigator } from 'react-navigation';

import { colors } from 'app/config/styles';

import * as Screens from 'app/config/screens';

// configure the screens that will be accessible in this router
const routeConfiguration = {
  Home : { 
    screen: Screens.Home
  },
  ContactList : { 
    screen: Screens.ContactList
  }
};

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = { 
  lazy : true,
  backBehavior: 'none',
  tabBarPosition : 'bottom',
  tabBarOptions : {
    activeBackgroundColor : colors.primary,
    activeTintColor : colors.primary,
    inactiveTintColor : '#999',
    indicatorStyle : {
      backgroundColor : colors.primary
    },
    showIcon : true,
    style : {
      backgroundColor : 'white'
    }
  },
  
};

export const MainTabs = TabNavigator(routeConfiguration, navigatorConfiguration);