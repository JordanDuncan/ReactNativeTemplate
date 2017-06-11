/*
 * app/actions/NavActions.js
 * Shows how to define actions that will alter navigation state.
 */

import { NavigationActions } from 'react-navigation';

import * as types from './types';

export function goBack() {
  return {
    type: types.STACK_NAV_BACK
  }
}