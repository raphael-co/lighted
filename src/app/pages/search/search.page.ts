import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import detailProduct from '../../../assets/detailProduct.json';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['../login/login.page.scss', './search.page.scss'],
  
})
export class SearchPage implements OnInit {

  prod_panier = []
  prods: any = detailProduct.product
  ishidden: boolean = false;
  searchbar:string = ""
  editedText: string = ""
  arrayProduct = []
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  public show_search(key){
    let backspace = false
    this.ishidden = true;

    if(key.length == 1){
      backspace = false
      this.searchbar += key
      this.getProductOnSearch(this.searchbar)
    } else if (key == "Backspace") {
      backspace = true
      this.editedText = this.searchbar.slice(0, -1) 
      this.searchbar = this.editedText
      this.getProductOnSearch(this.searchbar)
    } else{
      this.searchbar = ""
    }

    if(this.searchbar == ""){
      this.ishidden = false;
      this.arrayProduct = [];
    }

  }

  getProductOnSearch(product){
    this.arrayProduct = []
    let thisProduct = ""
    for(let i = 0; i < detailProduct.product.length; i++){
      this.prods = detailProduct.product[i].title.includes(product)

      if(this.prods == true)
      {
        thisProduct = detailProduct.product[i].title + "-" + detailProduct.product[i].name
        this.arrayProduct.push(thisProduct)
      }
    } 
  }

  clearAll(){
    this.searchbar = ""
    this.show_search("clear")
  }
}
