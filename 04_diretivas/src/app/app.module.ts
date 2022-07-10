import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ngIf/diretiva-ngIf.component';
import { DiretivaSwitichComponent } from './diretiva-switich/diretiva-switich.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent,
    DiretivaSwitichComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
