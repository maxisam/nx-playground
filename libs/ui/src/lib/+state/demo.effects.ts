import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import * as DemoActions from './demo.actions';

@Injectable()
export class DemoEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DemoActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return DemoActions.loadDemoSuccess({
            demo: [{ id: 1, name: 'test' }],
          });
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
