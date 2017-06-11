/*
 * app/screens/ContactDetail/index.js
 * A very simple contact detail screen. It doesn't use redux.
 */

import React, { Component } from 'react';
import {
	Text,
	View,
  TouchableOpacity,
  Image
} from 'react-native';

import FullWithHeader from 'app/layouts/FullWithHeader';

// import components and screen styles
import ReduxBackButton from 'app/components/ReduxBackButton';
import styles from './styles';

const BackButton = (<ReduxBackButton/>)

class ContactDetail extends Component {
  static navigationOptions = {
    title: 'Contact Detail',
  };

  render() {
    const {state} = this.props.navigation;

    return (
      <FullWithHeader title={state.params.contact.name} buttonLeft={BackButton}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={state.params.contact.avatar} />
        </View>
      </FullWithHeader>
    );
  }
}

export default ContactDetail;
