/*
 * app/components/CustomHeader/styles.js
 * Styles for CustomHeader
 */

import { StyleSheet } from 'react-native';

import { colors } from 'app/config/styles';

const button = {
  height : 40,
  width : 40,
  justifyContent: 'center',
  alignItems: 'center'
}

export default StyleSheet.create({
  container : {
    height: 64,
    width: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  buttonLeft : {
    ...button
  },
  buttonRight : {
    ...button
  },
  text : {
    color : colors.primaryText,
    height: 44,
    lineHeight: 44,
    fontSize : 16,
    fontWeight : '500',
    textAlign: 'center',
    flex: 1,
  }
});
