import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import { UnCapitalPipe } from './pipes/un-capital.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HidePasswordPipe } from './pipes/hide-password.pipe';

registerLocaleData(localeEs, 'es-MX');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeDe, 'de');

@NgModule({
    declarations: [
        AppComponent,
        UnCapitalPipe,
        CapitalizePipe,
        DomseguroPipe,
        HidePasswordPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es-MX'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
