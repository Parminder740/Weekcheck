import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BussinessAdminRoutingModule } from './bussiness-admin-routing.module';
import { CommonModule } from '@angular/common';
import { EmpGroupComponent } from './emp-group/emp-group.component';
import { LocationComponent } from './location/location.component';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports/reports.component';
import { ShiftGroupsComponent } from './shift-groups/shift-groups.component';
import { ShiftRolesComponent } from './shift-roles/shift-roles.component';
import { TabsModule } from 'ngx-tabset';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    LocationComponent,
    EmpGroupComponent,
    ShiftRolesComponent,
    ShiftGroupsComponent,
    ReportsComponent,

  ],
  imports: [
    CommonModule,
    AccordionModule ,
    BussinessAdminRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    NgxPaginationModule,
    MatCardModule,
    TabsModule
  ]
})
export class BussinessAdminModule { }
