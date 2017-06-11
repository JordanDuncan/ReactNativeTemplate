/*
 * app/routers/MainStack/index.js
 * Defines MainTabs and connects it to redux.
 */

import React, { Component, PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { MainTabs } from './config';

class Tabs extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, navigation } = this.props;

    return (
      <MainTabs
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

// connects redux state to MainTabs
export default connect(state => ({ navigation: state.MainTabs }))(Tabs);