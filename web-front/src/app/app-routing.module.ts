import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecaoGarantiaComponent } from './selecao-garantia/selecao-garantia.component';
import { CalculadoraGarantiasComponent } from './calculadora-garantias/calculadora-garantias.component';
import { LoginComponent } from './login/login.component';
import { PrimeiroAcessoComponent } from './primeiro-acesso/primeiro-acesso.component';
import { ImoveisComponent } from './imoveis/imoveis.component';

const routes: Routes = [
  { path: '', redirectTo: '/imoveis', pathMatch: 'full' },
  { path: 'selecao-garantia', component: SelecaoGarantiaComponent },
  { path: 'calculadora-garantias', component: CalculadoraGarantiasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: PrimeiroAcessoComponent },
  { path: 'imoveis', component: ImoveisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
