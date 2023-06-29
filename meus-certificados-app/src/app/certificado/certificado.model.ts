export class Certificado {

  id: number;
  nome: string;
  tecnologia: string;
  url: string;

  constructor(id: number, nome: string, tecnologia: string, url: string) {
    this.id = id;
    this.nome = nome;
    this.tecnologia = tecnologia;
    this.url = url;
  }

  public static clone(cer: Certificado) {
    let c: Certificado = new Certificado(cer.id, cer.nome, cer.tecnologia, cer.url);
    c.id = cer.id;
    c.nome = cer.nome;
    c.tecnologia = cer.tecnologia;
    c.url = cer.url;
    return c;
  }

}

