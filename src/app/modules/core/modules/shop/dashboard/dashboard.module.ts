import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './pages';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
