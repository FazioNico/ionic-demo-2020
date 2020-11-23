import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabThreeComponent } from './containers/tab-three/tab-three.component';


const routes: Routes = [
  {
    path: '',
    component: TabThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabThreeRoutingModule { }
