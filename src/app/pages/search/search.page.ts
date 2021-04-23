import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import detailProduct from '../../../assets/detailProduct.json';
import { Routes } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['../login/login.page.scss', './search.page.scss'],
})
export class SearchPage implements OnInit {

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
    if(key != "Backspace"){
      backspace = false
      this.searchbar += key
      this.getProductOnSearch(this.searchbar)
    } else {
      backspace = true
      this.editedText = this.searchbar.slice(0, -1) 
      this.searchbar = this.editedText
      this.getProductOnSearch(this.searchbar)
    }

    console.log(this.searchbar);
    
    if(this.searchbar == ""){
      this.ishidden = false;
      this.arrayProduct = [];
    }

  }

  getProductOnSearch(product){
    this.arrayProduct = []
    let thisProduct = ""
    console.log(detailProduct.product.length);
    for(let i = 0; i < detailProduct.product.length; i++){
      this.prods = detailProduct.product[i].title.includes(product)

      if(this.prods == true)
      {
        thisProduct = detailProduct.product[i].title + "-" + detailProduct.product[i].name
        this.arrayProduct.push(thisProduct)
      }
    } 
    console.log(this.arrayProduct);
    
  }

}
