import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography.component';

const typographyRoute: Route[] = [
  { path: '', component: TypographyComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(typographyRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class TypographyRoutingModule { }
