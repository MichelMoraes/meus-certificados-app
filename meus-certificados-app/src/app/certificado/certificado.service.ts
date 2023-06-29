import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Certificado } from './certificado.model';
import { Constants } from '../util/constants';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
 
  certificados$?: Observable<Certificado[]>;
  certificados: Certificado[];
  certificado: Certificado = new Certificado(0, '', '', '');
  statusCodeInterno? : number;
  
  
  constructor(private http: HttpClient) {
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);      
  }

  getCertificadosObservable() : any{    
    const url = 'http://localhost:3000/certificados';    

    this.http.get(url, { observe: 'response' }).subscribe(
    (response: HttpResponse<any>) => {      
        console.log('Status code:', response.status);
        this.statusCodeInterno = response.status;         
    },
    (error: any) => {
      console.error('Erro na requisição:', error);      
      this.statusCodeInterno = error.status;
      }    
    );
    
    return this.statusCodeInterno;
  }

  save(certificado: Certificado) { 
    console.log("passou aqui");
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);   
    this.certificados.push(certificado);
    console.log("passou aqui");
    WebStorageUtil.set(Constants.CERTIFICADO_KEY, this.certificados);

    fetch('http://localhost:3000/certificados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(certificado)
    
  })
  .then(response => response.json())
  .then(data => {    
    console.log('Certificado cadastrado com sucesso!');
  })
  .catch(error => {   
    console.error('Erro ao cadastrar certificado:', error);
  });

    this.getCertificadosObservable();
  }

  update(certificado: Certificado) {
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);
    this.delete(certificado.id);
    this.save(certificado);

    fetch('http://localhost:3000/certificados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(certificado)
    })
    .then(response => response.json())
    .then(data => {      
      console.log('Certificado atualizado com sucesso!');
    })
    .catch(error => {   
      console.error("json gerado:" + JSON.stringify(certificado));  
      console.error('Erro ao atualizar certificado:', error);
    });

    this.getCertificadosObservable();

  }

  delete(id: number): boolean {
    /* this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);
    this.certificados = this.certificados.filter((c) => {
      return c.id?.valueOf() != id?.valueOf();
    });
    WebStorageUtil.set(Constants.CERTIFICADO_KEY, this.certificados);
    return true; */

    fetch('http://localhost:3000/certificados/'+id, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {      
      console.log('Certificado excluído com sucesso!');
      location.reload();
    })
    .catch(error => {      
      console.error('Erro ao excluir certificado:', error);
    });

    this.getCertificados();
    this.getCertificadosObservable();
    return true;
  }

  getCertificados(): Certificado[] {
    //this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);

    fetch('http://localhost:3000/certificados')
    .then(response => response.json())
    .then(data => {
      this.certificados = data;      
      console.log('Certificados encontrados:', data);
    })
    .catch(error => {      
      console.error('Erro ao buscar certificados:', error);
    });    
    this.getCertificadosObservable();
    return this.certificados;
    

  }

  onEdit(certificado: Certificado) {    
    let clone = Certificado.clone(certificado);
    this.certificado = clone;
  }

  isExist(value: number): boolean {
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);
    for (let c of this.certificados) {
      if (c.id?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

 
}
