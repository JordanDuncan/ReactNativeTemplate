/*
 * app/screens/ContactList/index.js
 * A list view that downloads some data and puts it in a list view
 */

import React, { Component } from 'react';
import {
	Text,
	View,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ContactListItem from 'app/components/ContactListItem';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import ContactActions
import * as ContactActions from 'app/actions/ContactActions';

// import layouts
import FullWithHeader from 'app/layouts/FullWithHeader';

// import components and screen styles
import styles from './styles';

class ContactList extends Component {
  // Define tab options
  static navigationOptions = {
    tabBarLabel: 'Contacts',
    tabBarIcon: ({ focused, tintColor }) => {
      const name = focused ? "ios-people" : "ios-people-outline";
      return (<Icon name={name} size={30} color={tintColor} style={{marginTop: 4}} />);
    },
  };

  constructor(props) {
    super(props);
    this.props.ContactActions.retrieveContacts();
  };

  _onRefresh = () => {
    this.props.ContactActions.retrieveContacts();
  }

  // following 3 functions are used by FlatList
  _keyExtractor = (item, index) => item.id;

  _onPressItem = (params) => {
    this.props.ContactActions.showContact(params);
  };

  _renderItem = ({item}) => (
    <ContactListItem
      id={item.id}
      onPressItem={this._onPressItem}
      name={item.first_name + ' ' + item.last_name}
      avatar={{uri: item.avatar}}
    />
  );

  render() {
    let state = this.props.contacts
    return (
      <FullWithHeader title="Contacts">
        <FlatList
          style={styles.flatlist}
          data={state.contacts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onRefresh={this._onRefresh.bind(this)}
          refreshing={state.refreshing}
        />
      </FullWithHeader>
    );
  }
}

// map class.props.x to app state
const mapStateToProps = state => ({
	contacts: state.Contacts
});

// bind actions to class
// eg, ContactActions will be accessible via props.ContactActions.x
const mapDispatchToProps = dispatch => ({
	ContactActions: bindActionCreators(ContactActions, dispatch)
});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);