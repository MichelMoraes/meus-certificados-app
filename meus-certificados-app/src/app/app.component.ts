import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meus Certificados APP';

  dados: Array<{ id: number, nome: string, url: string }> = [];

  constructor() {
    this.dados = [{
      "id": 1,
      "nome": "Java",
      "url": "www.site.com.br",
    }];
  };
}
