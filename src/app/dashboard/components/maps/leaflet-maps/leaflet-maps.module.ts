import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletMapsRoutingModule } from './leaflet-maps-routing.module';
import { LeafletMapsComponent } from './leaflet-maps.component';

@NgModule({
  imports: [
    CommonModule,
    LeafletMapsRoutingModule
  ],
  declarations: [LeafletMapsComponent],
  exports: [LeafletMapsComponent]
})
export class LeafletMapsModule { }
