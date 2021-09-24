import { DemoEntity } from './demo.models';
import * as DemoActions from './demo.actions';
import { State, initialState, reducer } from './demo.reducer';

describe('Demo Reducer', () => {
  const createDemoEntity = (id: string, name = ''): DemoEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Demo actions', () => {
    it('loadDemoSuccess should return set the list of known Demo', () => {
      const demo = [
        createDemoEntity('PRODUCT-AAA'),
        createDemoEntity('PRODUCT-zzz'),
      ];
      const action = DemoActions.loadDemoSuccess({ demo });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
