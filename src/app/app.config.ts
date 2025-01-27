import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { VwitsGuard } from './vwits.guard';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({
    eventCoalescing: true}),
      provideRouter(routes), 
        VwitsGuard, provideHttpClient(withFetch())]
};



//this file acts as module file for "app" folder.