import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { MainHeaderModule } from 'src/app/core/default-layout/main-header/main-header.module';
import { MainSidebarModule } from 'src/app/core/default-layout/main-sidebar/main-sidebar.module';
import { MainFooterModule } from 'src/app/core/default-layout/main-footer/main-footer.module';
import { ControlSidebarModule } from 'src/app/core/default-layout/control-sidebar/control-sidebar.module';
import { SharedAppModule } from 'src/app/core/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainHeaderModule,
    MainSidebarModule,
    ControlSidebarModule,
    MainFooterModule,
    SharedAppModule,
    MatProgressSpinnerModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
