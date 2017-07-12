import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { ButtonsRoutingModule } from './buttons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  declarations: [ButtonsComponent],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }
