import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabThreeComponent } from './containers/tab-three/tab-three.component';
import { TabThreeRoutingModule } from './tab-three-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TabThreeComponent],
  imports: [
    CommonModule,
    TabThreeRoutingModule,
    IonicModule
  ]
})
export class TabThreeModule { }
