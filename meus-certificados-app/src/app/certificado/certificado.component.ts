import { Component, EventEmitter, Input, Output, OnInit, ViewChild} from '@angular/core';
import { CertificadoService } from './certificado.service';
import { Certificado } from './certificado.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})

export class CertificadoComponent {

    @ViewChild('form') form!: NgForm;

    @Input() id!: Number;  
    @Input() nome!: String;
    @Input() tecnologia!: String;
    @Input() url!: String;  
    
    certificados!: Certificado[];       
    certificado!: Certificado;

    isShowMessage = false;
    isSuccess = false;
    message = "";
    

  constructor(private certificadoService: CertificadoService, private route : ActivatedRoute) { }

  ngOnInit() {    
    this.certificado = new Certificado(0, '', '', '');    
    this.certificados = this.certificadoService.getCertificados();
  }

  adicionarCertificado(certificado: any): void {
    this.certificadoService.save(certificado);
    this.certificados = this.certificadoService.getCertificados();
  }

  atualizarCertificado(certificado: any): void {
    this.certificadoService.update(certificado);
  }

  removerCertificado(id: number): void {
    this.certificadoService.delete(id);
    this.certificados = this.certificadoService.getCertificados();
  }

  onEdit(c: Certificado) {    
    let clone = Certificado.clone(c);
    this.certificado = clone;
  }

  onDelete(id: number) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o registro com id:  ' + id + ' ?'
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.certificadoService.delete(id);

    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O registro foi removido com sucesso!';
    } else {
      this.message = 'Opa! O registro não pode ser removido!';
    }
    this.certificados = this.certificadoService.getCertificados();
  }

  onSubmit(certificado: any) {
    
    if (!this.certificadoService.isExist(this.certificado.id)) {
      this.certificadoService.save(this.certificado);
    } else {
      this.certificadoService.update(this.certificado);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    //this.certificado = new Certificado(0, '', '', '');
    this.certificados = this.certificadoService.getCertificados();
  }
  
}
