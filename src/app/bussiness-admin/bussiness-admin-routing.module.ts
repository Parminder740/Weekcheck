import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpGroupComponent } from './emp-group/emp-group.component';
import { LocationComponent } from './location/location.component';
import { ReportsComponent } from './reports/reports.component';
import { ShiftGroupsComponent } from './shift-groups/shift-groups.component';
import { ShiftRolesComponent } from './shift-roles/shift-roles.component';

const routes: Routes = [
  {path:'location',component:LocationComponent},
  {path:'emp-group',component:EmpGroupComponent},
  {path:'shift-roles',component:ShiftRolesComponent},
  {path:'shift-group',component:ShiftGroupsComponent},
  {path:'reports',component:ReportsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinessAdminRoutingModule { }
