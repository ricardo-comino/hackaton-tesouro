// Adicione no app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecaoGarantiaComponent } from './selecao-garantia/selecao-garantia.component';

const routes: Routes = [
  { path: '', redirectTo: '/selecao-garantia', pathMatch: 'full' },
  { path: 'selecao-garantia', component: SelecaoGarantiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
