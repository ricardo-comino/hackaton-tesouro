import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecao-garantia',
  templateUrl: './selecao-garantia.component.html',
  styleUrls: ['./selecao-garantia.component.scss']
})
export class SelecaoGarantiaComponent {

  constructor(private router: Router) {}

  irParaCalculadoraGarantias(): void {
    this.router.navigate(['/calculadora-garantias']);
  }
  
  irParaLogin(): void {
    this.router.navigate(['/login']);
  }

}
