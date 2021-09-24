import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DEMO_FEATURE_KEY, State, demoAdapter } from './demo.reducer';

// Lookup the 'Demo' feature state managed by NgRx
export const getDemoState = createFeatureSelector<State>(DEMO_FEATURE_KEY);

const { selectAll, selectEntities } = demoAdapter.getSelectors();

export const getDemoLoaded = createSelector(
  getDemoState,
  (state: State) => state.loaded
);

export const getDemoError = createSelector(
  getDemoState,
  (state: State) => state.error
);

export const getAllDemo = createSelector(getDemoState, (state: State) =>
  selectAll(state)
);

export const getDemoEntities = createSelector(getDemoState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getDemoState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDemoEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
