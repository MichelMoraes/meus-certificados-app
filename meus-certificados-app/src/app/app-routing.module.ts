import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroModuloSubtituloInicialComponent } from './primeiro-modulo-subtitulo-inicial/primeiro-modulo-subtitulo-inicial.component';
import { SegundoModuloListCertificadosComponent } from './segundo-modulo-list-certificados/segundo-modulo-list-certificados.component';
import { TerceiroComponenteNavbarMaterializeComponent } from './terceiro-componente-navbar-materialize/terceiro-componente-navbar-materialize.component';
import { QuartoComponenteTelaCadastroComponent } from './quarto-componente-tela-cadastro/quarto-componente-tela-cadastro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuintoComponenteTelaEdicaoComponent } from './quinto-componente-tela-edicao/quinto-componente-tela-edicao.component';
import { CustomFormComponent } from './custom-form/custom-form.component';


const  routes: Routes = [
  { path: 'primeiro-modulo', component: PrimeiroModuloSubtituloInicialComponent},
  { path: 'segundo-modulo', component: SegundoModuloListCertificadosComponent},
  { path: 'terceiro-modulo', component: TerceiroComponenteNavbarMaterializeComponent},
  { path: 'quarto-modulo', component: QuartoComponenteTelaCadastroComponent},  
  { path: 'quinto-modulo/:id', component: QuintoComponenteTelaEdicaoComponent}, 
  { path: 'custom-form/:id', component: CustomFormComponent}, 
  { path: 'inicio', component: InicioComponent},  
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path : '**', component : PageNotFoundComponent    }


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


