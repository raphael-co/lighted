import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpayementPage } from './mpayement.page';

const routes: Routes = [
  {
    path: '',
    component: MpayementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpayementPageRoutingModule {}
