import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as DemoActions from './demo.actions';
import * as DemoFeature from './demo.reducer';
import * as DemoSelectors from './demo.selectors';

@Injectable()
export class DemoFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(DemoSelectors.getDemoLoaded));
  allDemo$ = this.store.pipe(select(DemoSelectors.getAllDemo));
  selectedDemo$ = this.store.pipe(select(DemoSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(DemoActions.init());
  }
}
