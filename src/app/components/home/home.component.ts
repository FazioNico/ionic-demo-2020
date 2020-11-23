import { Component } from "@angular/core";
import { ModalController } from '@ionic/angular';
import { ModalDemoComponent } from '../modal-demo/modal-demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(
    public modalCtrl: ModalController
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
      
    })
  }
}
