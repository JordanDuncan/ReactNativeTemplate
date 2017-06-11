/*
 * app/components/Button
 * A simple button that accepts text and onPress
 */

import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

export default Button = (props) => {
  return (
    <TouchableHighlight style={styles.marginHighlight} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  )
}