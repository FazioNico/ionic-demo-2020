import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTwoComponent } from './containers/tab-two/tab-two.component';
import { TabTwoRoutingModule } from './tab-two-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TabTwoComponent],
  imports: [
    CommonModule,
    TabTwoRoutingModule,
    IonicModule
  ]
})
export class TabTwoModule { }
