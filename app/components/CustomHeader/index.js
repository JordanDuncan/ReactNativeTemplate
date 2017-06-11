/*
 * app/components/CustomHeader [SAMPLE FILE]
 * Defining a very simple custom header component
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

export default CustomHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonLeft}>{props.buttonLeft}</View>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.buttonRight}>{props.buttonRight}</View>
    </View>
  )
}