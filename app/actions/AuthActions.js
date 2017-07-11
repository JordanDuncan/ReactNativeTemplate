import * as types from './types';

export function login() {
  return {
    type : types.AUTH_LOGIN
  }
};

export function logout() {
  return {
    type : types.AUTH_LOGOUT
  }
};