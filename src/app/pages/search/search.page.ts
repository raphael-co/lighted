import { Component, OnInit, Renderer2 } from '@angular/core';
Event

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['../login/login.page.scss', './search.page.scss'],
})
export class SearchPage implements OnInit {

  ishidden: boolean = false;
  searchbar:string = ""
  editedText: string = ""
  constructor() { }

  ngOnInit() {
  }

  public show_search(key){
    this.ishidden = true;
    if(key != "Backspace"){
      this.searchbar += key
      console.log(this.searchbar);
    } else {
      this.editedText = this.searchbar.slice(0, -1) 
      this.searchbar = this.editedText
    }

    console.log(this.searchbar);
    
    if(this.searchbar == ""){
      this.ishidden = false;
    }
    
  }

}
