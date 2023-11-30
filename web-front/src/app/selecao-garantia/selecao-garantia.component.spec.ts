import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoGarantiaComponent } from './selecao-garantia.component';

describe('SelecaoGarantiaComponent', () => {
  let component: SelecaoGarantiaComponent;
  let fixture: ComponentFixture<SelecaoGarantiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoGarantiaComponent]
    });
    fixture = TestBed.createComponent(SelecaoGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
