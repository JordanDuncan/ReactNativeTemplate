/*
 * app/components/Button/styles.js
 * Styles for Button
 */

import { StyleSheet } from 'react-native';

import { colors, centerChildren } from 'app/config/styles';

export default StyleSheet.create({
  marginHighlight : {
    margin : 10
  },
  button : {
    ...centerChildren,
    height : 50,
    width : 200,
    backgroundColor : colors.primary
  },
  text : {
    color : colors.primaryText,
    fontSize : 16,
    fontWeight : '300',
    textAlign: 'center'
  }
});
