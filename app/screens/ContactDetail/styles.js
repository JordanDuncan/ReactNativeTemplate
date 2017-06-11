/*
 * app/screens/ContactDetail/styles.js
 * Styles for ContactDetail.
 */

import { StyleSheet } from 'react-native';

import { fullFlexContainer } from 'app/config/styles';

export default styles = StyleSheet.create({
  container : {
    ...fullFlexContainer,
    backgroundColor: '#FFFFFF'
  },
  avatar: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  }
});