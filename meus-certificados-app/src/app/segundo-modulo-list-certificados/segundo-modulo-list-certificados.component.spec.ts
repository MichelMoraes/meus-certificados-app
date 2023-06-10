import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoModuloListCertificadosComponent } from './segundo-modulo-list-certificados.component';
import {MatListModule} from '@angular/material/list';


describe('SegundoModuloListCertificadosComponent', () => {
  let component: SegundoModuloListCertificadosComponent;
  let fixture: ComponentFixture<SegundoModuloListCertificadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoModuloListCertificadosComponent]
    });
    fixture = TestBed.createComponent(SegundoModuloListCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
