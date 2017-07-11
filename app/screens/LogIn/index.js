/*
 * app/screens/LogIn/index.js
 * A sample screen that makes use of actions and redux state.
 */

// import react and react-native elements
import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';

// import navigation actions
import { NavigationActions } from 'react-navigation';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import actions from AuthActions
import * as AuthActions from 'app/actions/AuthActions';

// import layouts
import FullWithHeader from 'app/layouts/FullWithHeader';

// import components and screen styles
import Button from 'app/components/Button';
import styles from './styles';

class LogIn extends Component {
  constructor(props) {
		super(props);
		// do initialisation stuff here
	}

	_login() {
		this.props.AuthActions.login();
	}

  render() {
    return (
			<FullWithHeader title="Log In">
				<View style={styles.container}>
					<Button text="Login" onPress={this._login.bind(this)} />
				</View>
			</FullWithHeader>
    );
  }
}

// map class.props.x to app state
const mapStateToProps = state => ({

});

// bind actions to class
// eg, AuthActions will be accessible via props.AuthActions.x
const mapDispatchToProps = dispatch => ({
	AuthActions: bindActionCreators(AuthActions, dispatch)
});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);