import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeSearchPageRoutingModule } from './type-search-routing.module';

import { TypeSearchPage } from './type-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeSearchPageRoutingModule
  ],
  declarations: [TypeSearchPage]
})
export class TypeSearchPageModule {}
