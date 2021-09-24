import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {
  // empty
}
export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<AppState>[] = [];
