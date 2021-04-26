import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [{
    path: '',
    component: TabsPage,
    children: [{
            path: 'home',
            children: [{
                path: '',
                data: { json: false },
                loadChildren: '../home/home.module#HomePageModule'
            }],
            data: { json: false },
        }, {
            path: 'profil',
            children: [{
                path: '',
                data: { json: true },
                loadChildren: '../profil/profil.module#ProfilPageModule'
            }],
            data: { json: true },
        },
        {
          path: 'search',
          children: [{
              path: '',
              data: { json: true },
              loadChildren: '../search/search.module#SearchPageModule'
          }],
          data: { json: true },
      },
      {
        path: 'panier',
        children: [{
            path: '',
            data: { json: true },
            loadChildren: '../panier/panier.module#PanierPageModule'
        }],
        data: { json: true },
    },
        {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full'
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}