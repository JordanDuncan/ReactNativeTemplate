/*
 * app/components/ReduxBackButton
 * A back button that is connected to Redux and triggers NavActions.goBack()
 */

import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import actions from NavActions
import * as NavActions from 'app/actions/NavActions';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class ReduxBackButton extends Component {
  _goBack() {
    this.props.NavActions.goBack();
  }

  render() {
    return (
      <TouchableOpacity style={styles.to} onPress={this._goBack.bind(this)}>
        <Icon name="ios-arrow-back" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    );
  }
}

// map class.props.x to app state
const mapStateToProps = state => ({

});

// bind actions to class
// eg, HomeActions will be accessible via props.HomeActions.x
const mapDispatchToProps = dispatch => ({
	NavActions: bindActionCreators(NavActions, dispatch)
});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(ReduxBackButton);