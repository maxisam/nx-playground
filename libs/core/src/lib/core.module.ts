import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { metaReducers, reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class CoreModule {}
