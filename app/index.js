/*
 * app/index.js
 * Cross platform entry point for your app.
 * Here, we configure the redux store, register all the screens, and start the app with a navigation stack.
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// import redux provider to wrap whole app in
import { Provider } from 'react-redux';

import configureStore from 'app/config/store';

import AuthGate from 'app/layouts/AuthGate';

class Root extends Component {

	state = {
		isLoggedIn : false
	}

	constructor(props) {
		super(props);
		this.store = configureStore();

		setTimeout(() => {
			this.setState((state) => { return { ...state, isLoggedIn : true }});
		}, 5000)
	}

	render() {
		return (
			<Provider store={this.store}>
				<AuthGate/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('RNDF', () => Root);

export default Root;