import { createFeatureSelector } from '@ngrx/store';
import * as fromAppGeneral from './app-general.reducer';

export const selectAppGeneralState = createFeatureSelector<fromAppGeneral.IAppGeneralState>(
  fromAppGeneral.appGeneralFeatureKey
);
