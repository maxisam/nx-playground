/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import { enableProdMode } from '@angular/core';
import '@angular/platform-server/init';
import { environment } from '@org/core';

if (environment.production) {
  enableProdMode();
}

export { renderModule, renderModuleFactory } from '@angular/platform-server';
export { AppServerModule } from './app/app.server.module';
