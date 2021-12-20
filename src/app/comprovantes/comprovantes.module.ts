import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprovantesPageRoutingModule } from './comprovantes-routing.module';

import { ComprovantesPage } from './comprovantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprovantesPageRoutingModule
  ],
  declarations: [ComprovantesPage]
})
export class ComprovantesPageModule {}
