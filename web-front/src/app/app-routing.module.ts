import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecaoGarantiaComponent } from './selecao-garantia/selecao-garantia.component';
import { CalculadoraGarantiasComponent } from './calculadora-garantias/calculadora-garantias.component';

const routes: Routes = [
  { path: '', redirectTo: '/selecao-garantia', pathMatch: 'full' },
  { path: 'selecao-garantia', component: SelecaoGarantiaComponent },
  { path: 'calculadora-garantias', component: CalculadoraGarantiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
