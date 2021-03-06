/*
 * app/screens/Home/index.js
 * A sample screen that makes use of actions and redux state.
 */

// import react and react-native elements
import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';

// import navigation actions
import { NavigationActions } from 'react-navigation';

// import icons package
import Icon from 'react-native-vector-icons/Ionicons';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import actions from HomeActions & AuthActions
import * as HomeActions from 'app/actions/HomeActions';
import * as AuthActions from 'app/actions/AuthActions';

// import layouts
import FullWithHeader from 'app/layouts/FullWithHeader';

// import components and screen styles
import Button from 'app/components/Button';
import styles from './styles';

class Home extends Component {
	static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => {
      const name = focused ? "ios-home" : "ios-home-outline";
      return (<Icon name={name} size={30} color={tintColor} style={{marginTop: 4}} />);
    },
  };

  constructor(props) {
		super(props);
		// do initialisation stuff here
	}

	_updateString(str) {
		this.props.HomeActions.setString(str);
	}

	_logout(str) {
		this.props.AuthActions.logout();
	}

  render() {
    return (
			<FullWithHeader title="Home">
				<View style={styles.container}>
					<Button text={this.props.sampleString} onPress={this._updateString.bind(this, 'screens/Home changed me via HomeActions.js!')} />
					<Button text="Logout" onPress={this._logout.bind(this)} />
				</View>
			</FullWithHeader>
    );
  }
}

// map class.props.x to app state
const mapStateToProps = state => ({
	sampleString: state.Home.sampleString
});

// bind actions to class
// eg, HomeActions will be accessible via props.HomeActions.x
const mapDispatchToProps = dispatch => ({
	HomeActions: bindActionCreators(HomeActions, dispatch),
	AuthActions: bindActionCreators(AuthActions, dispatch)
});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(Home);