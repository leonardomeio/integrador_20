import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosospagamentosPageRoutingModule } from './todosospagamentos-routing.module';

import { TodosospagamentosPage } from './todosospagamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosospagamentosPageRoutingModule
  ],
  declarations: [TodosospagamentosPage]
})
export class TodosospagamentosPageModule {}
