import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessAdminRoutingModule } from './bussiness-admin-routing.module';
import { LocationComponent } from './location/location.component';
import { EmpGroupComponent } from './emp-group/emp-group.component';
import { ShiftRolesComponent } from './shift-roles/shift-roles.component';
import { ShiftGroupsComponent } from './shift-groups/shift-groups.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    LocationComponent,
    EmpGroupComponent,
    ShiftRolesComponent,
    ShiftGroupsComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    BussinessAdminRoutingModule, 
  ]
})
export class BussinessAdminModule { }
