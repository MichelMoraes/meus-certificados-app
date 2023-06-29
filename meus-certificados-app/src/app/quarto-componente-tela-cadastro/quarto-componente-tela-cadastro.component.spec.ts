import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoComponenteTelaCadastroComponent } from './quarto-componente-tela-cadastro.component';

describe('QuartoComponenteTelaCadastroComponent', () => {
  let component: QuartoComponenteTelaCadastroComponent;
  let fixture: ComponentFixture<QuartoComponenteTelaCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuartoComponenteTelaCadastroComponent]
    });
    fixture = TestBed.createComponent(QuartoComponenteTelaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
