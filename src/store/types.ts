import { User } from '../shared/types';

export interface AppStateModel {
  user: User | null;
  authenticationError: string;
}
