import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { IconsRoutingModule } from './icons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IconsRoutingModule
  ],
  declarations: [IconsComponent],
  exports: [IconsComponent]
})
export class IconsModule { }
