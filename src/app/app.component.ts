import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  prod_panier = []

  constructor(private toast: ToastController) {}

  async addProduct(product){
    this.prod_panier.push(product)
    let prod = Object.assign(this.prod_panier)
    
    const toast = await this.toast.create({
      message: "Votre produit à été ajouter au panier",
      duration: 2000,
      position: 'top',
      color: 'light'
  });
  toast.present();
  localStorage.setItem('Product', JSON.stringify(prod));
  }
  

}
