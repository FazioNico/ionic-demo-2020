import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabOneComponent } from './containers/tab-one/tab-one.component';


const routes: Routes = [
  {
    path: '',
    component: TabOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabOneRoutingModule { }
