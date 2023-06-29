import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Certificado } from './certificado.model';
import { Constants } from '../util/constants';


@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
 


  certificados: Certificado[];
  certificado: Certificado = new Certificado(0,'', '', '');
  
  constructor() {
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);  
    
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
    // Cadastro bem-sucedido
    console.log('Certificado cadastrado com sucesso!');
  })
  .catch(error => {
    // Tratar erro
    console.error('Erro ao cadastrar certificado:', error);
  });

    
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
