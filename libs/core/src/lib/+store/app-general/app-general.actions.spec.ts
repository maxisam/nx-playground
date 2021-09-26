import * as fromAppGeneral from './app-general.actions';

describe('loadAppGenerals', () => {
  it('should return an action', () => {
    expect(fromAppGeneral.loadAppGenerals().type).toBe('[AppGeneral] Load AppGenerals');
  });
});
