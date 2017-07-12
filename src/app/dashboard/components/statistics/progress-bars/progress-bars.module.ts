import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarsComponent } from './progress-bars.component';
import { ProgressBarsRoutingModule } from './progress-bars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarsRoutingModule
  ],
  declarations: [ProgressBarsComponent],
  exports: [ProgressBarsComponent]
})
export class ProgressBarsModule { }
