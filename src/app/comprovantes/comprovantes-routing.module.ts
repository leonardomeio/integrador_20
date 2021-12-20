import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprovantesPage } from './comprovantes.page';

const routes: Routes = [
  {
    path: '',
    component: ComprovantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprovantesPageRoutingModule {}
