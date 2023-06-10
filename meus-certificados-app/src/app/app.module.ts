import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroModuloSubtituloInicialComponent } from './primeiro-modulo-subtitulo-inicial/primeiro-modulo-subtitulo-inicial.component';
import { SegundoModuloListCertificadosComponent } from './segundo-modulo-list-certificados/segundo-modulo-list-certificados.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroModuloSubtituloInicialComponent,
    SegundoModuloListCertificadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
