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

  
  prods : any = detailProduct.product;
  item:any = "";
  sub: any;

  constructor(private router: Router,private route: ActivatedRoute, public http: HttpClient) {}

   
  ngOnInit() {

    this.item = this.router.getCurrentNavigation().extras.state
    console.log(this.item);
    console.log(this.prods);

    for(let i = 0; i < this.prods.length; i++){
      console.log(this.prods[i].name);
    } 
    
  }


}
