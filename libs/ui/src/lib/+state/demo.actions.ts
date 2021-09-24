import { createAction, props } from '@ngrx/store';
import { DemoEntity } from './demo.models';

export const init = createAction('[Demo Page] Init');

export const loadDemoSuccess = createAction(
  '[Demo/API] Load Demo Success',
  props<{ demo: DemoEntity[] }>()
);

export const loadDemoFailure = createAction(
  '[Demo/API] Load Demo Failure',
  props<{ error: any }>()
);
