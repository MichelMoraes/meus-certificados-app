import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoComponenteTelaEdicaoComponent } from './quinto-componente-tela-edicao.component';

describe('QuintoComponenteTelaEdicaoComponent', () => {
  let component: QuintoComponenteTelaEdicaoComponent;
  let fixture: ComponentFixture<QuintoComponenteTelaEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuintoComponenteTelaEdicaoComponent]
    });
    fixture = TestBed.createComponent(QuintoComponenteTelaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
