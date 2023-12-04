import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraGarantiasComponent } from './calculadora-garantias.component';

describe('CalculadoraGarantiasComponent', () => {
  let component: CalculadoraGarantiasComponent;
  let fixture: ComponentFixture<CalculadoraGarantiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraGarantiasComponent]
    });
    fixture = TestBed.createComponent(CalculadoraGarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
