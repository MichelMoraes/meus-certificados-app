import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  title = 'Meus Certificados APP';  

  dados: Array<{id: number, nome: string, tecnologia: string, url: string }> = [];

  constructor() {
    this.dados = [
      {
      "id": 1,
      "nome": "Java com SpringBoot",
      "tecnologia": "Java",
      "url": "www.site.com.br",
      }, 
      {
        "id": 2,
        "nome": "Cobol para loucos",
        "tecnologia": "Cobol",
        "url": "www.site.com.br",
        }
  
  
  
  ];
  };

}
