import { Component } from "@angular/core";
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalDemoComponent } from '../modal-demo/modal-demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}


  async openModal() {
    const ionModal = await this.modalCtrl.create({
      component: ModalDemoComponent,
      componentProps: {
        message: 'hello form parent'
      }
    });
    ionModal.present();
    ionModal.onDidDismiss()
    .then(data => {
      console.log(data);
    });
  }

  async displayAlert() {
    const ionAlert = await this.alertCtrl.create({
      header: 'Alert:',
      message: 'Alert avec Ionic Alert Controler',
      buttons: [
        {
          text: 'ok',
          role: 'ok'
        }
      ]
    });
    ionAlert.present();
  }
  
  async displayToast() {
    const ionToast = await this.toastCtrl.create({
      message: 'Hello Ionic Toast'
    });
    ionToast.present();
  }
}
