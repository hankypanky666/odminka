import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './google-maps.component';

const googleRoute: Route[] = [
  { path: '', component: GoogleMapsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(googleRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class GoogleMapsRoutingModule { }
