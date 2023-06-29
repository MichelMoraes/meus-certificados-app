import { Component, Input,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { CertificadoComponent } from '../certificado/certificado.component';



@Component({
  selector: 'app-segundo-modulo-list-certificados',
  templateUrl: './segundo-modulo-list-certificados.component.html',
  styleUrls: ['./segundo-modulo-list-certificados.component.scss'], 
  
})
export class SegundoModuloListCertificadosComponent { 

  isDisabled= true;
  title = 'Meus Certificados APP';
  dadosLinha : Array<{id: number, nome: string, tecnologia: string, url: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
  ) {}
  
  //uso do @INPUT
  @Input() dados: Array<{id: number, nome: string, tecnologia: string, url: string }> | null = null;

  clicked = true;

 
  onClickItem(dadosLinha: CertificadoComponent) {
    this.router.navigate(['quinto-modulo', dadosLinha?.id]);
    
  }


}


