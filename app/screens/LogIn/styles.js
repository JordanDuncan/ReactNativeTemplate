/*
 * app/screens/LogIn/styles.js
 * Styles for LogIn.
 */

import { StyleSheet } from 'react-native';

import { fullFlexContainer, centerChildren } from 'app/config/styles';

export default styles = StyleSheet.create({
  container : {
    ...fullFlexContainer,
    ...centerChildren
  },
  button : {
    width: 100, 
    height: 100, 
    backgroundColor: 'powderblue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});