import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { CertificadoService } from '../certificado/certificado.service';
import { Certificado } from '../certificado/certificado.model';
import { InitializeWebStorage } from '../util/initializeWebStorage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {
 
  @ViewChild('form') form!: NgForm;
  
  idParam = 0;


  certificado: Certificado = new Certificado(0,'', '', '');
  //certificados?: Certificado[];
  @Input() certificados ? : Certificado[];

  constructor( private certificadoService: CertificadoService, private route : ActivatedRoute) { }

  isShowMessage = false;
  isSuccess = false;
  message = "";


  ngOnInit() {
    //this.certificados = this.certificadoService.getCertificados();   
    InitializeWebStorage.initializeWebStorage();
    this.certificados = this.certificadoService.getCertificados();

    this.idParam = +this.route.snapshot.paramMap.get('id')!;
    let idParam: number = + this.route.snapshot.paramMap.get('id')!;
    this.certificados =  this.certificados.filter(certificado => certificado.id === this.idParam);

   // this.certificado = this.certificados[0];

   
  }

  enviarFormulario() {   
      this.certificadoService.save(this.certificado);
      console.log("PASSOU AQUI");
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
  
  onSubmit() {
    
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
