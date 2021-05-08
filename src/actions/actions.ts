import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { AppStateModel } from '../store/types';

export namespace AppActions {
  export enum Type {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    AUTH_ERROR = 'AUTH_ERROR',
    LOG_OUT = 'LOG_OUT',
    SET_USER_LOADED = 'SET_USER_LOADED'
  }

  export const loginSuccess = createAction<AppStateModel['user']>(Type.LOGIN_SUCCESS);
  export const authenticationError = createAction<AppStateModel['authenticationError']>(Type.AUTH_ERROR);
  export const logOut = createAction(Type.LOG_OUT);
  export const setUserLoaded = createAction(Type.SET_USER_LOADED);
}

export type AppActions = Omit<typeof AppActions, 'Type'>;

export const actions = (dispatch: Dispatch) => {
  const { Type, ...actions } = AppActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as AppActions;
};
