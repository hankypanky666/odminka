import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleMapsComponent } from './bubble-maps.component';
import { BubbleMapsRoutingModule } from './bubble-maps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BubbleMapsRoutingModule
  ],
  declarations: [BubbleMapsComponent],
  exports: [BubbleMapsComponent]
})
export class BubbleMapsModule { }
