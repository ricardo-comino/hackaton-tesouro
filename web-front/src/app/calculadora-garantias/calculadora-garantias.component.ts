import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora-garantias',
  templateUrl: './calculadora-garantias.component.html',
  styleUrls: ['./calculadora-garantias.component.scss'],
})
export class CalculadoraGarantiasComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/selecao-garantia']);
  }
}
