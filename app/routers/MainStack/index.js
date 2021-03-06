/*
 * app/routers/MainStack/index.js
 * Defines MainStack and connects it to redux.
 */

import React, { Component, PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { MainStack } from './config';

class Stack extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }
  
  backAction = () => this.navigator.props.navigation.goBack();

  render() {
    const { dispatch, navigation } = this.props;

    return (
      <MainStack
        ref={(ref) => { this.navigator = ref; }}
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigation,
          })
        }
      />
    );
  }
}

// connect redux state to MainStack props.
export default connect(state => ({ 
  navigation : state.MainStack,
  tabs : state.MainTabs
}))(Stack);