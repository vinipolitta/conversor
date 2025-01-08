import { provideToastr, ToastrModule } from 'ngx-toastr';
import { ApplicationConfig } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr(),
    { provide: BrowserAnimationsModule },
  ],
};
