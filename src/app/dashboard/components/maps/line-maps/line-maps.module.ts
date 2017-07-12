import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineMapsRoutingModule } from './line-maps-routing.module';
import { LineMapsComponent } from './line-maps.component';

@NgModule({
  imports: [
    CommonModule,
    LineMapsRoutingModule
  ],
  declarations: [LineMapsComponent],
  exports: [LineMapsComponent]
})
export class LineMapsModule { }
