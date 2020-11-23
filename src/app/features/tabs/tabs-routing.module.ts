import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabOneComponent } from '../tab-one/containers/tab-one/tab-one.component';
import { TabsComponent } from './containers/tabs/tabs.component';


const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab-one/tab-one.module').then(m => m.TabOneModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab-two/tab-two.module').then(m => m.TabTwoModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab-three/tab-three.module').then(m => m.TabThreeModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
