import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McommandesPage } from './mcommandes.page';

const routes: Routes = [
  {
    path: '',
    component: McommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McommandesPageRoutingModule {}
