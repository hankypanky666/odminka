import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeafletMapsComponent } from './leaflet-maps.component';

const leafletRoute: Route[] = [
  { path: '', component: LeafletMapsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(leafletRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class LeafletMapsRoutingModule { }
