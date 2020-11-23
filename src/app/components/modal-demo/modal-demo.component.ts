import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.scss']
})
export class ModalDemoComponent implements OnInit {

  @Input() message: string;
  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
  }

}
