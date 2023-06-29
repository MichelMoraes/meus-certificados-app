import { Component, EventEmitter, Input, Output, OnInit, ViewChild} from '@angular/core';
import { CertificadoService } from './certificado.service';
import { Certificado } from './certificado.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})

export class CertificadoComponent {

    @ViewChild('form') form!: NgForm;

    @Input() id?:any;  
    @Input() nome?:any;
    @Input() tecnologia?:any;
    @Input() url?:any;  
    
    certificados!: Certificado[];       
    certificado!: Certificado;

    isShowMessage = false;
    isSuccess = false;
  message = "";
  statusCode?: any;
    

  constructor(private certificadoService: CertificadoService, private route : ActivatedRoute) { }

  ngOnInit() {        

    this.certificado = new Certificado(0, '', '', '');    
    
    fetch('http://localhost:3000/certificados')
    .then(response => response.json())
      .then(data => {        
      this.certificados = data;      
      console.log('Certificados encontrados:', data);
    })
    .catch(error => {  
      console.error('Erro ao buscar certificados:', error);
      
    });       
    
    this.statusCode = this.certificadoService.getCertificadosObservable();
    console.log("Satus code TS = " + this.certificadoService.getCertificadosObservable());

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
    this.statusCode = this.certificadoService.getCertificadosObservable();
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
    this.statusCode = this.certificadoService.getCertificadosObservable();
    
    

  }

  onSubmit(certificado: any) {
    
    if (!this.certificadoService.isExist(this.certificado.id)) {
      this.certificadoService.save(this.certificado);
      console.log("Passou aqui no save");
    } else {
      this.certificadoService.update(this.certificado);
      console.log("Passou aqui no update");
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';    
    
    this.certificados = this.certificadoService.getCertificados();

    fetch('http://localhost:3000/certificados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(certificado)
    })
    .then(response => response.json())
    .then(data => {
      // Cadastro bem-sucedido
      console.log('Certificado cadastrado com sucesso!');
    })
    .catch(error => {
      // Tratar erro
      console.error('Erro ao cadastrar certificado:', error);
    });

    this.statusCode = this.certificadoService.getCertificadosObservable();
    
  }
  
}
