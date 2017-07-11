/*
 * app/layouts/AuthGame
 * A layout that is connected to redux. It shows the AuthStack or MainStack depending on login status
 */

// import react and react-native elements
import React, { Component } from 'react';

// import redux functions to connect controller to app state
import { connect } from 'react-redux';

// import both routers
import AuthStack from 'app/routers/AuthStack';
import MainStack from 'app/routers/MainStack';

class AuthGate extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    let state = this.props.auth;
    var appState = state.user ? <MainStack/> : <AuthStack/>;
    return appState;
  }
}

// map class.props.x to app state
const mapStateToProps = state => ({
	auth: state.Auth
});

// bind actions to class
const mapDispatchToProps = dispatch => ({});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(AuthGate);