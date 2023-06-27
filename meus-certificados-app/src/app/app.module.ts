import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroModuloSubtituloInicialComponent } from './primeiro-modulo-subtitulo-inicial/primeiro-modulo-subtitulo-inicial.component';
import { SegundoModuloListCertificadosComponent } from './segundo-modulo-list-certificados/segundo-modulo-list-certificados.component';
import { TerceiroComponenteNavbarMaterializeComponent } from './terceiro-componente-navbar-materialize/terceiro-componente-navbar-materialize.component';
import { FooterComponent } from './footer/footer.component';
import { QuartoComponenteTelaCadastroComponent } from './quarto-componente-tela-cadastro/quarto-componente-tela-cadastro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioComponent } from './inicio/inicio.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { QuintoComponenteTelaEdicaoComponent } from './quinto-componente-tela-edicao/quinto-componente-tela-edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroModuloSubtituloInicialComponent,
    SegundoModuloListCertificadosComponent,
    TerceiroComponenteNavbarMaterializeComponent,
    FooterComponent,
    QuartoComponenteTelaCadastroComponent,
    PageNotFoundComponent,
    InicioComponent,
    CertificadoComponent,
    QuintoComponenteTelaEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
