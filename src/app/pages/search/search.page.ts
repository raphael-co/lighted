import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['../login/login.page.scss', './search.page.scss'],
})
export class SearchPage implements OnInit {

  hidden: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public show_search(){
    
  }

}
