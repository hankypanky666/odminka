import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';

const buttonsRoute: Route[] = [
  { path: '', component: ButtonsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(buttonsRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonsRoutingModule { }
