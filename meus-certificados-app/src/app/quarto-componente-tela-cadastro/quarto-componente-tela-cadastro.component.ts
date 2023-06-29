import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quarto-componente-tela-cadastro',
  templateUrl: './quarto-componente-tela-cadastro.component.html',
  styleUrls: ['./quarto-componente-tela-cadastro.component.scss'], 

  template: `
    Favorite Color: <input type="text" [(ngModel)]="form-tela-cadastro">`

})
export class QuartoComponenteTelaCadastroComponent {
  formTelaCadastro = '';
 
  
  

}
