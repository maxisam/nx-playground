import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreMockModule } from '@org/core';
import { DemoEffects } from '../+state/demo.effects';
import { DemoFacade } from '../+state/demo.facade';
import * as fromDemo from '../+state/demo.reducer';
import { DemoComponent } from './demo.component';

export default {
  title: 'DemoComponent',
  component: DemoComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      StoreMockModule,
      StoreModule.forFeature(fromDemo.DEMO_FEATURE_KEY, fromDemo.reducer),
      EffectsModule.forFeature([DemoEffects]),
    ],
    providers: [DemoFacade],
  },
  props: {},
});
