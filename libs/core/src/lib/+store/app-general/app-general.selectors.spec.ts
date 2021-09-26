import * as fromAppGeneral from './app-general.reducer';
import { selectAppGeneralState } from './app-general.selectors';

describe('AppGeneral Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAppGeneralState({
      [fromAppGeneral.appGeneralFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
