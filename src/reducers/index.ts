import { combineReducers } from 'redux';
import { RootState } from './state';
import { appReducer } from './app';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  app: appReducer
});
