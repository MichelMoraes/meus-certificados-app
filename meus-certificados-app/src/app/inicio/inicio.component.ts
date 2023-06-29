import { Certificado } from '../certificado/certificado.model';
import { CertificadoService } from '../certificado/certificado.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent {


  title = 'Meus Certificados APP';  

  dados: Array<{id: number, nome: string, tecnologia: string, url: string }> = [];

  certificados: any[];
  
  certificado!: Certificado;

  constructor(private certificadoService: CertificadoService) { 
    this.certificados = this.certificadoService.getCertificados();
  }



  ngOnInit() {
    this.certificados = this.certificadoService.getCertificados();
  }
    
   

}
