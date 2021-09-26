import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppGeneralEffects } from './app-general.effects';

describe('AppGeneralEffects', () => {
  let actions$: Observable<any>;
  let effects: AppGeneralEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppGeneralEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AppGeneralEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
