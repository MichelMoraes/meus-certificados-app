import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';



@Component({
  selector: 'app-segundo-modulo-list-certificados',
  templateUrl: './segundo-modulo-list-certificados.component.html',
  styleUrls: ['./segundo-modulo-list-certificados.component.scss'], 
  
})
export class SegundoModuloListCertificadosComponent { 

  isDisabled= true;
  title = 'Meus Certificados APP';

  @Input() dados: Array<{ id: number, nome: string, url: string }> | null = null;

  clicked = true;
}

export class ButtonOverviewExample {}
