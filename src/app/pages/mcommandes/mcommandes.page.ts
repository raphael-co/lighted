import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-mcommandes',
  templateUrl: './mcommandes.page.html',
  styleUrls: ['./mcommandes.page.scss'],
})
export class McommandesPage implements OnInit {

  arrayProd = JSON.parse(localStorage.getItem('PduitAcheté'))
  img = "../../../assets/img/"

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}


