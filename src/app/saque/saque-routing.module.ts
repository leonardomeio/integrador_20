import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaquePage } from './saque.page';

const routes: Routes = [
  {
    path: '',
    component: SaquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaquePageRoutingModule {}
