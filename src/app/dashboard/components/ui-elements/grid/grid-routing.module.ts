import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GridComponent } from './grid.component';

const gridRoute: Route[] = [
  { path: '', component: GridComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(gridRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class GridRoutingModule { }
