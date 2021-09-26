import { createReducer, on } from '@ngrx/store';
import * as AppGeneralActions from './app-general.actions';

export const appGeneralFeatureKey = 'appGeneral';

export interface IAppGeneralState {
  test: string;
}

export const initialState: IAppGeneralState = {
  test: 'test',
};

export const appGeneralReducer = createReducer(
  initialState,

  on(AppGeneralActions.loadAppGenerals, (state) => state)
);
