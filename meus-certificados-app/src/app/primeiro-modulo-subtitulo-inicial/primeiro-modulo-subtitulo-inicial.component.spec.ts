import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroModuloSubtituloInicialComponent } from './primeiro-modulo-subtitulo-inicial.component';

describe('PrimeiroModuloSubtituloInicialComponent', () => {
  let component: PrimeiroModuloSubtituloInicialComponent;
  let fixture: ComponentFixture<PrimeiroModuloSubtituloInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeiroModuloSubtituloInicialComponent]
    });
    fixture = TestBed.createComponent(PrimeiroModuloSubtituloInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
