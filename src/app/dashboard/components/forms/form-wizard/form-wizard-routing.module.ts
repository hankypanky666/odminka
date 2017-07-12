import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormWizardComponent } from './form-wizard.component';

const formWizardRoute: Route[] = [
  { path: '', component: FormWizardComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(formWizardRoute)
  ],
  exports: [RouterModule]
})
export class FormWizardRoutingModule { }
