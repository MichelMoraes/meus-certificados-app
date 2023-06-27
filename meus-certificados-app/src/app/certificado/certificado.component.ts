import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})

export class CertificadoComponent {
    @Input() id!: Number;  
    @Input() nome!: String;
    @Input() tecnologia!: String;
    @Input() url!: String;  
  
}
