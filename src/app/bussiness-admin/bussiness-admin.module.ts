import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessAdminRoutingModule } from './bussiness-admin-routing.module';
import { LocationComponent } from './location/location.component';
import { EmpGroupComponent } from './emp-group/emp-group.component';
import { ShiftRolesComponent } from './shift-roles/shift-roles.component';
import { ShiftGroupsComponent } from './shift-groups/shift-groups.component';
import { ReportsComponent } from './reports/reports.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AccordionModule } from 'ngx-bootstrap/accordion';

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
    MatToolbarModule,
    AccordionModule
  
  ]
})
export class BussinessAdminModule { }
