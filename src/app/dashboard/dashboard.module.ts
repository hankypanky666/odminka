import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule, MdListModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,

    FlexLayoutModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdListModule
  ],
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
