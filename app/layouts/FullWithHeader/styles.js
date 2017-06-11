/*
 * app/layouts/FullWithHeader
 * Styles for FullWithHeader.
 */

import { StyleSheet } from 'react-native';

import { fullFlexContainer } from 'app/config/styles';

export default styles = StyleSheet.create({
  fullContainer : {
    ...fullFlexContainer,
    flexDirection : 'column'
  },
  contentContainer : {
    flex : 1,
    width: '100%'
  }
});