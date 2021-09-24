import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { DemoEntity } from './demo.models';
import { DemoEffects } from './demo.effects';
import { DemoFacade } from './demo.facade';

import * as DemoSelectors from './demo.selectors';
import * as DemoActions from './demo.actions';
import { DEMO_FEATURE_KEY, State, initialState, reducer } from './demo.reducer';

interface TestSchema {
  demo: State;
}

describe('DemoFacade', () => {
  let facade: DemoFacade;
  let store: Store<TestSchema>;
  const createDemoEntity = (id: string, name = ''): DemoEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(DEMO_FEATURE_KEY, reducer),
          EffectsModule.forFeature([DemoEffects]),
        ],
        providers: [DemoFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(DemoFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allDemo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allDemo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadDemoSuccess` to manually update list
     */
    it('allDemo$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allDemo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          DemoActions.loadDemoSuccess({
            demo: [createDemoEntity('AAA'), createDemoEntity('BBB')],
          })
        );

        list = await readFirst(facade.allDemo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
