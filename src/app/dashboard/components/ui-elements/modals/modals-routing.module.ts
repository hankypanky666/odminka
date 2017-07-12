import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ModalsComponent } from './modals.component';

const modalsRoute: Route[] = [
  { path: '', component: ModalsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(modalsRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class ModalsRoutingModule { }
