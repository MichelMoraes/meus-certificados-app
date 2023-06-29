
import { Component, OnInit, Input } from '@angular/core';
import { CertificadoComponent } from '../certificado/certificado.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-quinto-componente-tela-edicao',
  templateUrl: './quinto-componente-tela-edicao.component.html',
  styleUrls: ['./quinto-componente-tela-edicao.component.scss']
})
export class QuintoComponenteTelaEdicaoComponent implements OnInit {

  certificadoComponent!: CertificadoComponent;

  @Input() dadosLinha: Array<{id: number, nome: string, tecnologia: string, url: string }> | null = null;

  constructor(private route : ActivatedRoute){}

  idParam = 0;

  ngOnInit(): void {
    this.idParam = +this.route.snapshot.paramMap.get('id')!;
    let idParam: number = +this.route.snapshot.paramMap.get('id')!;
    let certificadoComponent = this.dadosLinha;  
  }



}
