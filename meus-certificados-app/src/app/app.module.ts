import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroModuloSubtituloInicialComponent } from './primeiro-modulo-subtitulo-inicial/primeiro-modulo-subtitulo-inicial.component';
import { SegundoModuloListCertificadosComponent } from './segundo-modulo-list-certificados/segundo-modulo-list-certificados.component';
import { TerceiroComponenteNavbarMaterializeComponent } from './terceiro-componente-navbar-materialize/terceiro-componente-navbar-materialize.component';
import { FooterComponent } from './footer/footer.component';
import { QuartoComponenteTelaCadastroComponent } from './quarto-componente-tela-cadastro/quarto-componente-tela-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroModuloSubtituloInicialComponent,
    SegundoModuloListCertificadosComponent,
    TerceiroComponenteNavbarMaterializeComponent,
    FooterComponent,
    QuartoComponenteTelaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
