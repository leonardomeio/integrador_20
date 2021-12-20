import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosospagamentosPage } from './todosospagamentos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosospagamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosospagamentosPageRoutingModule {}
