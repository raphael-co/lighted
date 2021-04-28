import { Component, OnInit } from '@angular/core';
import { PanierPage } from '../panier/panier.page';
import { TypeSearchPage } from '../type-search/type-search.page';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  providers: [
    PanierPage,
    TypeSearchPage,
    AppComponent
  ]
})
export class TabsPage implements OnInit {

  constructor(public panier: PanierPage) { }

  ngOnInit() {
  }

}
