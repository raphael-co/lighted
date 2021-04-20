import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeSearchPage } from './type-search.page';

const routes: Routes = [
  {
    path: '',
    component: TypeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeSearchPageRoutingModule {}
