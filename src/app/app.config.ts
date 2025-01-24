import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { VwitsGuard } from './vwits.guard';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), VwitsGuard]
};



//this file acts as module file for "app" folder.