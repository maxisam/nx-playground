import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DemoActions from './demo.actions';
import { DemoEntity } from './demo.models';

export const DEMO_FEATURE_KEY = 'demo';

export interface State extends EntityState<DemoEntity> {
  selectedId?: string | number; // which Demo record has been selected
  loaded: boolean; // has the Demo list been loaded
  error?: string | null; // last known error (if any)
}

export interface DemoPartialState {
  readonly [DEMO_FEATURE_KEY]: State;
}

export const demoAdapter: EntityAdapter<DemoEntity> = createEntityAdapter<DemoEntity>();

export const initialState: State = demoAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const demoReducer = createReducer(
  initialState,
  on(DemoActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(DemoActions.loadDemoSuccess, (state, { demo }) =>
    demoAdapter.setAll(demo, { ...state, loaded: true })
  ),
  on(DemoActions.loadDemoFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return demoReducer(state, action);
}
