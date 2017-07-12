import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LineMapsComponent } from './line-maps.component';

const lineRoute: Route[] = [
  { path: '', component: LineMapsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(lineRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class LineMapsRoutingModule { }
