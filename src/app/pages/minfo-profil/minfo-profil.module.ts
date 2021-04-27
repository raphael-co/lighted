import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinfoProfilPageRoutingModule } from './minfo-profil-routing.module';

import { MinfoProfilPage } from './minfo-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinfoProfilPageRoutingModule
  ],
  declarations: [MinfoProfilPage]
})
export class MinfoProfilPageModule {}
