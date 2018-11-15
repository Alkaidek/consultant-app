import {Component, OnInit, ViewChild} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Slides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild(Slides) slides: Slides;
    login = '';
    psw = '';
    slider = [
        {
            image: '../../assets/images/baner/1.png'
        },
        {
            image: '../../assets/images/baner/2.png'
        },
        {
            image: '../../assets/images/baner/3.png'
        }
    ];

    constructor(public alertController: AlertController,
                private router: Router,
                private toastController: ToastController) {
    }
    async presentAlert(header, subHeader, buttons) {
        const alert = await this.alertController.create({
            header: header,
            subHeader: subHeader,
            buttons: buttons
        });
        await alert.present();
    }
    async presentToastWithOptions(msg, showCloseButton, position, closeButtonText, color) {
        const toast = await this.toastController.create({
            message: msg,
            showCloseButton: showCloseButton,
            position: position,
            closeButtonText: closeButtonText,
            color: color,
            duration: 3000
        });
        toast.present();
    }
    checkLogin(page) {
        if (this.login === 'Test' && this.psw === 'test') {
            this.presentToastWithOptions('Zalogowany jako: ' + this.login, false, 'bottom', 'ok', 'success');
            this.login = '';
            this.psw = '';
            this.routeTo(page);
        } else {
            this.presentToastWithOptions('Błąd logowania!', true, 'bottom', 'ok', 'danger');
        }
    }
    routeTo(page) {
        this.router.navigateByUrl(page);
    }
    ngOnInit() {
        this.slides.startAutoplay();
        this.slides.options = {
            duration: 5000,
            speed: 2000
        };
    }
}
