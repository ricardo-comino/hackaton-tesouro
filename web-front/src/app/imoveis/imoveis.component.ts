import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImoveisComponent {

  constructor(private router: Router) {}


  irParaGarantia(): void {
    this.router.navigate(['/selecao-garantia']);
  }

}
