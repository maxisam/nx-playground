import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { environment } from '../environments/environment';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export function mockReducer(
  actionReducer: ActionReducer<any>
): ActionReducer<any> {
  return (state: any, action: any): any => {
    return actionReducer(state, action);
  };
}

export const metaReducers: Array<MetaReducer<any>> = !environment.production
  ? [mockReducer]
  : [];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class StoreMockModule {}
