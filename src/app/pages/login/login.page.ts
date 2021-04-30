import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


import { AuthService } from '../../services/auth.service';
import { ForgotPasswordComponent } from '../../modals/forgot-password/forgot-password.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string = '';
    password: string = '';

    isErrorMail: boolean = true;

    constructor(
        private router: Router,
        private auth: AuthService,
        private platform: Platform,
        private storage: NativeStorage,
        private modal: ModalController,
        private toast: ToastController,
        private loading: LoadingController
        
    ) {}

    async ngOnInit() {
        let theToken;

        if (this.platform.is("desktop")) {
            theToken = localStorage.getItem('theToken')
        } else {
            theToken = await this.storage.getItem('theToken')
        }
        if (theToken !== undefined && theToken !== null)
            this.router.navigate(['/tabs'])
            
    }

    async forgotPassword() {
        const modal = await this.modal.create({
            component: ForgotPasswordComponent,
            componentProps: {
                'emailer': this.email
            }
        });
        return await modal.present();
    }

    checkEmail() {
        const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
        // this.isErrorMail = !regex.test(this.email);
        this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
    }

    async loginForm() {
        const load = await this.loading.create({
            message: 'Please wait...',
            duration: 5000
        });
        await load.present();
        this.auth.login(this.email, this.password).then(async(user: any) => {
                if (this.platform.is("desktop")) {
                    localStorage.setItem('theToken', user.token)
                    localStorage.setItem('user', JSON.stringify(this.email))
                } else {
                    await this.storage.setItem('theToken', user.theToken)
                    await this.storage.setItem('user', JSON.stringify(user.user))
                }
                await this.loading.dismiss();
                
                this.router.navigate(['/tabs'])
        }).catch(async(err) => {
            const toast = await this.toast.create({
                message: err,
                duration: 2000
            });
            toast.present();
            await this.loading.dismiss();
        })
    }
}