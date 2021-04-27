import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McommandesPageRoutingModule } from './mcommandes-routing.module';

import { McommandesPage } from './mcommandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McommandesPageRoutingModule
  ],
  declarations: [McommandesPage]
})
export class McommandesPageModule {}
