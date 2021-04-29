import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import detailProduct from '../../../assets/detailProduct.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  prods : any = detailProduct.product;
  name;
  prix;
  description;
  image;
  title;
  item:any = "";
  sub: any;
  isProd: boolean;
  arrayProd = [];
  img = "../../../assets/img/"

  constructor(private router: Router, private search: AppComponent) { }

  ngOnInit() {
    this.name = this.item.name
    this.prix = this.item.prix
    this.description = this.item.description
    this.image = this.img+ this.item.image
    this.title = this.item.title
    // console.log(this.image);
    
  }



  addProduct(id){
    this.search.addProduct(id)
  }

}
