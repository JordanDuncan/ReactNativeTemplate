/*
 * app/layouts/FullWithHeader
 * A full screen layout that includes the CustomHeader component
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View } from 'react-native';

// import components and screen styles
import CustomHeader from 'app/components/CustomHeader';
import styles from './styles';

export default class FullWithHeader extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    return (
				<View style={styles.fullContainer}>
					<CustomHeader text={this.props.title} buttonLeft={this.props.buttonLeft}></CustomHeader>
					<View style={styles.contentContainer}>
            {this.props.children}
          </View>
				</View>
    );
  }
}