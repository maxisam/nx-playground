import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  appGeneralReducer,
  IAppGeneralState,
} from '../+store/app-general/app-general.reducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {
  appGeneral: IAppGeneralState;
}
export const reducers: ActionReducerMap<AppState> = {
  appGeneral: appGeneralReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
