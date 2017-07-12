import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridRoutingModule } from './grid-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GridRoutingModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule { }
