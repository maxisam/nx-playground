import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as DemoFeature from './demo.reducer';
import * as DemoActions from './demo.actions';

@Injectable()
export class DemoEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DemoActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return DemoActions.loadDemoSuccess({ demo: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return DemoActions.loadDemoFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
