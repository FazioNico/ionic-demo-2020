import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './containers/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule
  ]
})
export class TabsModule { }
