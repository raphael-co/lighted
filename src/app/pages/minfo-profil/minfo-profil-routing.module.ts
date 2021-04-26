import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinfoProfilPage } from './minfo-profil.page';

const routes: Routes = [
  {
    path: '',
    component: MinfoProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinfoProfilPageRoutingModule {}
