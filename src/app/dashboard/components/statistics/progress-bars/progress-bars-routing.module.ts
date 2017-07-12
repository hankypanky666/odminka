import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarsComponent } from './progress-bars.component';

const progressBarsRoutes: Routes = [
  { path: '', component: ProgressBarsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(progressBarsRoutes)
  ],
  exports: [RouterModule]
})
export class ProgressBarsRoutingModule { }
