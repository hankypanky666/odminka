import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals.component';
import { ModalsRoutingModule } from './modals-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModalsRoutingModule
  ],
  declarations: [ModalsComponent],
  exports: [ModalsComponent]
})
export class ModalsModule { }
