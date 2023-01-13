import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent, 
    AuthComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    PagesModule, 
    RouterModule],
  exports: [
    DashboardLayoutComponent, 
    AuthComponent
  ],
})
export class LayoutsModule {}
