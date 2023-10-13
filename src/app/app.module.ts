import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

//Configuración del locale de la app

import localEsCo from '@angular/common/locales/es-CO'
import localFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common'


registerLocaleData(localEsCo);
registerLocaleData(localFrCA);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,


  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'fr-CA'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
