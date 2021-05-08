import { User } from '../shared/types';
import { request } from '../utils/request';
import { AppActions } from '../actions';
import loginSuccess = AppActions.loginSuccess;
import authenticationError = AppActions.authenticationError;
import { AppRouts } from '../shared/route-config';

export * from './logger';
export { default as thunk } from 'redux-thunk';

import { browserHistory } from '../App';

export function login(user: User) {
  return function (dispatch: any) {
    request(`/sessions`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
       },
      method: 'POST',
      body: JSON.stringify(user)
     })
      .then((res: any) => {
        localStorage.setItem('accessToken', res.token);
        dispatch(loginSuccess(user));
        browserHistory.push(AppRouts.HOME);
       })
      .catch((err: any) => {
        const message = err.response.error_message;
        dispatch(authenticationError(message));
       });
   }
 }
