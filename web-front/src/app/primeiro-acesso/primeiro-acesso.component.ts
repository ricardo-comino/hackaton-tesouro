import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.scss'],
})
export class PrimeiroAcessoComponent {
  passoAtual = 1;
  progresso = 33;

  itemPasso1: string = '';
  itemPasso2: string = '';
  itemPasso3: string = '';

  constructor(private router: Router) {}

  confirmarPasso1(): void {
    if (this.itemPasso1) {
      this.passoAtual = 2;
      this.progresso = 66;
    }
  }

  confirmarPasso2(): void {
    if (this.itemPasso2) {
      this.passoAtual = 3;
      this.progresso = 100;
    }
  }

  confirmarPasso3(): void {   
      this.passoAtual = 4;    
  }

}
