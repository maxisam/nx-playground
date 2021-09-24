import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDemo from './+state/demo.reducer';
import { DemoEffects } from './+state/demo.effects';
import { DemoFacade } from './+state/demo.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDemo.DEMO_FEATURE_KEY, fromDemo.reducer),
    EffectsModule.forFeature([DemoEffects]),
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent],
  providers: [DemoFacade],
})
export class UiModule {}
