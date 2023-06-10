import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-segundo-modulo-list-certificados',
  templateUrl: './segundo-modulo-list-certificados.component.html',
  styleUrls: ['./segundo-modulo-list-certificados.component.scss'],
})
export class SegundoModuloListCertificadosComponent {
  linguagens: string[];
 
  constructor() {
    this.linguagens = ["Java", "C++", "Delphi", "PHP", "Perl"];
  }
  isDisabled= true;
  title = 'Meus Certificados APP';
}
