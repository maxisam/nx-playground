import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DemoEffects } from './demo.effects';
import * as DemoActions from './demo.actions';

describe('DemoEffects', () => {
  let actions: Observable<any>;
  let effects: DemoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DemoEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(DemoEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DemoActions.init() });

      const expected = hot('-a-|', {
        a: DemoActions.loadDemoSuccess({ demo: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
