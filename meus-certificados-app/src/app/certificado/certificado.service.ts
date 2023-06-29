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
  }

  update(certificado: Certificado) {
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);
    this.delete(certificado.id);
    this.save(certificado);
  }

  delete(id: number): boolean {
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);
    this.certificados = this.certificados.filter((c) => {
      return c.id?.valueOf() != id?.valueOf();
    });
    WebStorageUtil.set(Constants.CERTIFICADO_KEY, this.certificados);
    return true;
  }

  getCertificados(): Certificado[] {
    this.certificados = WebStorageUtil.get(Constants.CERTIFICADO_KEY);
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
