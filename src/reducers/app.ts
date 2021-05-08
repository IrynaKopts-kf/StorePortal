import { handleActions } from 'redux-actions';
import { AppActions } from '../actions';
import { RootState } from './index';

const initialState: RootState.AppState = {
  user: null,
  authenticationError: ''
};

export const appReducer = handleActions<RootState.AppState, any>(
  {
    [AppActions.Type.LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        user: {...action.payload, loaded: true},
      };
    },
    [AppActions.Type.AUTH_ERROR]: (state, action) => {
      return {
        ...state,
        authenticationError: action.payload,
      };
    },
    [AppActions.Type.LOG_OUT]: (state, action) => {
      return {
        ...state,
        user: null,
      };
    },
    [AppActions.Type.SET_USER_LOADED]: (state, action) => {
      return {
        ...state,
        user: {loaded: true},
      };
    },
  },
  initialState
);
