/*
 * app/components/ContactList/styles.js
 * Styles for ContactList
 */

import { StyleSheet } from 'react-native';

import { colors } from 'app/config/styles';

export default StyleSheet.create({
  mainCont : {
    height : 60,
    flex : 1,
    flexDirection : 'row'
  },
  avatar : {
    height : 40,
    width : 40,
    margin : 10
  },
  text : {
    color : 'black',
    fontSize : 16,
    fontWeight : '300',
    lineHeight : 60
  }
});
