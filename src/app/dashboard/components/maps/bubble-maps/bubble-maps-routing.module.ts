import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BubbleMapsComponent } from './bubble-maps.component';

const bubbleRoute: Route[] = [
  { path: '', component: BubbleMapsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(bubbleRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class BubbleMapsRoutingModule { }
