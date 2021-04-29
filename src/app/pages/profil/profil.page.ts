import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  
})
export class ProfilPage implements OnInit {

  email = JSON.parse(localStorage.getItem('user'))

  constructor( private router: Router,private platform: Platform,private storage: NativeStorage) { }

  ngOnInit() {
  }

  async logout(){
    if (this.platform.is("desktop")) {
      window.localStorage.clear();
      this.router.navigate(['/login'])
    } else {
        await this.storage.clear();
        this.router.navigate(['/login'])
      }
  }

}
