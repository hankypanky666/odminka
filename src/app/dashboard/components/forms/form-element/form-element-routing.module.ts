import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormElementComponent } from './form-element.component';

const formElementsRoute: Route[] = [
  { path: '', component: FormElementComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(formElementsRoute)
  ],
  exports: [RouterModule]
})
export class FormElementRoutingModule { }
