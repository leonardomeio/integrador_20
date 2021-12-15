import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaquePageRoutingModule } from './saque-routing.module';

import { SaquePage } from './saque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaquePageRoutingModule
  ],
  declarations: [SaquePage]
})
export class SaquePageModule {}
