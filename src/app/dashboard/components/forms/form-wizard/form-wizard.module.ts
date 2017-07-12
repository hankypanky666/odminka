import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';

@NgModule({
  imports: [
    CommonModule,
    FormWizardRoutingModule
  ],
  declarations: [FormWizardComponent],
  exports: [FormWizardComponent]
})
export class FormWizardModule { }
