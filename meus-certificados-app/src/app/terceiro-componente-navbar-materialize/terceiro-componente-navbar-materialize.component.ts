import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-terceiro-componente-navbar-materialize',
  templateUrl: './terceiro-componente-navbar-materialize.component.html',
  styleUrls: ['./terceiro-componente-navbar-materialize.component.scss']
})
export class TerceiroComponenteNavbarMaterializeComponent implements AfterViewInit{
 
   @ViewChild('mobile')  sidenav? : ElementRef;

   ngAfterViewInit(): void {
       M.Sidenav.init(this.sidenav?.nativeElement);
   }

 
}
