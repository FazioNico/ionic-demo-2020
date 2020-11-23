import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabOneComponent } from './containers/tab-one/tab-one.component';
import { TabOneRoutingModule } from './tab-one-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TabOneComponent],
  imports: [
    CommonModule,
    TabOneRoutingModule,
    IonicModule
  ]
})
export class TabOneModule { }
