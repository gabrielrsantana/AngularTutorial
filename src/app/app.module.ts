import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
//criaados
import { AppRoutingModule } from './app-routing.module';
import { TypescriptComponent } from './typescript';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
