//fazendo virar páginas
//CRIANDO OBJETO DE ROTAS, IMPORTANDO O MODULO ROUTER, UTILIZO METODO ESTATICO FORROOT E PASSO O ARRAY DE ROTAS CONFIGURADO.

import { ExtratoComponent } from './extrato/extrato.component';
import { novaTransferenciaComponent } from './nova-transferencia/Nova-transferencia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [//Cada componente é um rota que estou configurando
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: novaTransferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
