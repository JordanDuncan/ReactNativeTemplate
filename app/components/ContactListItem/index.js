/*
 * app/components/ContactListItem
 * A list item for use in ContactList
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

export default class ContactListItem extends Component {
  _onPress = () => {
    this.props.onPressItem({
      name : this.props.name, 
      avatar : this.props.avatar
    });
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={styles.mainCont}>
          <Image style={styles.avatar} source={this.props.avatar} />
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}