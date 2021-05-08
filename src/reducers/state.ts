import { AppStateModel } from '../store/types';

export interface RootState {
  app: AppStateModel;
  router?: any;
}

export namespace RootState {
  export type AppState = AppStateModel;
}
