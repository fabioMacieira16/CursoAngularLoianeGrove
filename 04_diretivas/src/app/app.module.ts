import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ngIf/diretiva-ngIf.component';
import { DiretivaSwitichComponent } from './diretiva-switich/diretiva-switich.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivasNgclassComponent } from './diretivas-ngclass/diretivas-ngclass.component';
import { DiretivasNgstyleComponent } from './diretivas-ngstyle/diretivas-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgcontentComponent } from './exemplo-ngcontent/exemplo-ngcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent,
    DiretivaSwitichComponent,
    DiretivaNgforComponent,
    DiretivasNgclassComponent,
    DiretivasNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
