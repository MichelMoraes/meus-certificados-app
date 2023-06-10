import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroComponenteNavbarMaterializeComponent } from './terceiro-componente-navbar-materialize.component';

describe('TerceiroComponenteNavbarMaterializeComponent', () => {
  let component: TerceiroComponenteNavbarMaterializeComponent;
  let fixture: ComponentFixture<TerceiroComponenteNavbarMaterializeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerceiroComponenteNavbarMaterializeComponent]
    });
    fixture = TestBed.createComponent(TerceiroComponenteNavbarMaterializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
