import detailProduct from '../../../assets/detailProduct.json';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-type-search',
  templateUrl: './type-search.page.html',
  styleUrls: ['./type-search.page.scss'],
})
export class TypeSearchPage implements OnInit {

  description_hidden = true
  prods : any = detailProduct.product;
  item:any = "";
  sub: any;
  isProd: boolean;
  arrayProd = [];
  img = "../../../assets/img/"

  constructor(private router: Router,private route: ActivatedRoute, public http: HttpClient) {}

   
  ngOnInit() {

    this.item = this.router.getCurrentNavigation().extras.state.example
    console.log(this.item);
    console.log(this.prods);

    this.getProduct();
    console.log(this.arrayProd);

  }

  getProduct(){
    let nameProd
    for(let i = 0; i < this.prods.length; i++){
      nameProd = this.prods[i].title+"-"+this.prods[i].name
      if(this.prods[i].apparatusOfMoment == this.item || this.prods[i].title == this.item ||this.prods[i].categorie == this.item || nameProd == this.item){
        this.arrayProd.push(this.prods[i]);
      }
    }
  }

}