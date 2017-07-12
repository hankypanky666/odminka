import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';

const iconsRoute: Route[] = [
  { path: '', component: IconsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(iconsRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class IconsRoutingModule { }
