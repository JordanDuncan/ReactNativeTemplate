/*
 * app/actions/ContactActions.js [SAMPLE FILE]
 * Defines actions to run operations on contacts in store
 */

import { NavigationActions } from 'react-navigation';

import * as types from './types';

export function retrieveContacts() {
  return function (dispatch) {
    dispatch(refreshContacts());
    
    fetch('https://reqres.in/api/users?page=' + (Math.floor(Math.random() * 4) + 1))
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(updateContacts(responseJson.data));
    })
    .catch((error) => {
      dispatch(updateContacts())
    });
  }
}

export function refreshContacts() {
  return {
    type : types.CONTACTS_REFRESHING
  };
}

export function updateContacts(res) {
  return {
    type: types.CONTACTS_UPDATE,
    contacts: res
  };
}

export function showContact(params) {
  return {
    type: types.STACK_NAV_PUSH,
    nav: NavigationActions.navigate({
			routeName: 'ContactDetail',
			params: { contact: params },
		})
  };
}