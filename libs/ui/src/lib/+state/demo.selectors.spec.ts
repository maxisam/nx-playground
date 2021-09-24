import { DemoEntity } from './demo.models';
import { demoAdapter, DemoPartialState, initialState } from './demo.reducer';
import * as DemoSelectors from './demo.selectors';

describe('Demo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDemoId = (it: DemoEntity) => it.id;
  const createDemoEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DemoEntity);

  let state: DemoPartialState;

  beforeEach(() => {
    state = {
      demo: demoAdapter.setAll(
        [
          createDemoEntity('PRODUCT-AAA'),
          createDemoEntity('PRODUCT-BBB'),
          createDemoEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Demo Selectors', () => {
    it('getAllDemo() should return the list of Demo', () => {
      const results = DemoSelectors.getAllDemo(state);
      const selId = getDemoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DemoSelectors.getSelected(state) as DemoEntity;
      const selId = getDemoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getDemoLoaded() should return the current 'loaded' status", () => {
      const result = DemoSelectors.getDemoLoaded(state);

      expect(result).toBe(true);
    });

    it("getDemoError() should return the current 'error' state", () => {
      const result = DemoSelectors.getDemoError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
