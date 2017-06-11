/*
 * app/actions/ContactActions.js [SAMPLE FILE]
 * Defines actions to run operations on contacts in store
 */

import { NavigationActions } from 'react-navigation';

import * as types from './types';

export function retrieveContacts() {
  return function (dispatch) {
    return fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      dispatch(updateContacts(responseJson.data));
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export function updateContacts(res) {
  return {
    type: types.UPDATE_CONTACTS,
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