import { Component, OnInit } from '@angular/core';
import { TypeSearchPage } from '../type-search/type-search.page';
import detailProduct from '../../../assets/detailProduct.json';
import { Storage } from '@capacitor/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  providers: [
    TypeSearchPage
  ]
  
})
export class PanierPage implements OnInit {

  show = false
  prods: any = detailProduct.product
  arrayProd = JSON.parse(localStorage.getItem('Product'))
  img = "../../../assets/img/"

  constructor(public product: TypeSearchPage, public alertController: AlertController, private loading: LoadingController, private toast: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.myDefaultMethodToFetchData();
  }

  refreshPage() {
  this.ionViewWillEnter();
  }

  myDefaultMethodToFetchData(){
    this.arrayProd = JSON.parse(localStorage.getItem('Product'))
    // console.log(this.arrayProd.length);
    if(this.arrayProd.length > 0){
      this.show = true
      console.log(this.show);
    } else {
      this.show = false
      console.log(this.show);
    }
    
  }

   async getProdToDelete(content){
    let array = []

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attention !',
      message: '<strong>Voulez vous supprimer cet article de votre panier ?</strong>',
      buttons: [
        {
          text: 'Non merci',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Je confirme',
          handler: () => {
            for(let i = 0; i != this.arrayProd.length; i++){
              console.log(i);
              if(content == this.arrayProd[i].id){
                delete this.arrayProd[i]
              } else {
                array.push(this.arrayProd[i])
              }
            }
            
            let prod = Object.assign(array)
            localStorage.removeItem('Product')
            localStorage.setItem('Product', JSON.stringify(prod));
            this.myDefaultMethodToFetchData();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async validAchat(){
    let montantTotal = 0;

    for(let i = 0; i != this.arrayProd.length; i++){
      montantTotal  = Number(this.arrayProd[i].prix) + montantTotal
    }
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Achat',
      message: '<strong>Confirmez vous votre achat pour un montant total de </strong>'+ montantTotal +'€',
      buttons: [
        {
          text: 'Non merci',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Je confirme',
          handler: async () => {
            const load = await this.loading.create({
              message: 'Achat en cours...',
              duration: 3000
            });
            await load.present();

            const toast = await this.toast.create({
              message: "Merci de votre achat ! Vos articles arriveront d'ici peu ;)",
              duration: 6000
            });
            toast.present();

            let array = []
            let prod = Object.assign(array)
            localStorage.removeItem('Product')
            localStorage.setItem('Product', JSON.stringify(prod));
            this.myDefaultMethodToFetchData();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

  }

}
