import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpayementPageRoutingModule } from './mpayement-routing.module';

import { MpayementPage } from './mpayement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpayementPageRoutingModule
  ],
  declarations: [MpayementPage]
})
export class MpayementPageModule {}
