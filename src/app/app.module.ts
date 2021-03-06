import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { TypescriptComponent } from './typescript';
import { ModulosComponent } from './modulos/modulos.component';
import { ComponenteComponent } from './componente/componente.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,//aparentemente nao precisa declarar aqui os componentes criados,funcioa sem
    ModulosComponent,
    TypescriptComponent,
    ComponenteComponent,
    DiretivasComponent,
    PipesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
