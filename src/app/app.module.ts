import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Kliker1Component } from './kliker1/kliker1.component';
import { Kliker2Component } from './kliker2/kliker2.component';
import { KlikServiceService } from './services/klik-service.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    Kliker1Component,
    Kliker2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
