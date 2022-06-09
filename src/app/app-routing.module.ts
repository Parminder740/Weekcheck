import { RouterModule, Routes } from '@angular/router';
import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { BussinessSetComponent } from './bussiness-set/bussiness-set.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './bussiness-admin/location/location.component';
import { EmpGroupComponent } from './bussiness-admin/emp-group/emp-group.component';
import { ReportsComponent } from './bussiness-admin/reports/reports.component';
import { ShiftRolesComponent } from './bussiness-admin/shift-roles/shift-roles.component';
import { ShiftGroupsComponent } from './bussiness-admin/shift-groups/shift-groups.component';
import { ViewComponent } from '@progress/kendo-angular-dateinputs';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { TimeoffViewComponent } from './timeoff-view/timeoff-view.component';
import { TimeoffCreateComponent } from './timeoff-create/timeoff-create.component';
import { SchdeuleComponent } from './schdeule/schdeule.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  { path: "addorjoin", component: AddOrJoinBussinessComponent },
  { path: 'BussinessSetup', component: BussinessSetComponent },
  { path: '', component: BussinessSetComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: "employees", component: EmployeesComponent },
      {path:'dashboard/employeeregister',component:EmpRegisterComponent},
      { path: 'emp-group', component: EmpGroupComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'shift-groups', component: ShiftGroupsComponent },
      { path: 'shift-roles', component: ShiftRolesComponent },
      { path: 'timeoff/view', component: TimeoffViewComponent },
      { path: 'timeoff/create', component: TimeoffCreateComponent },
      { path: 'notifications', component: NotificationComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'schdeule', component: SchdeuleComponent },
      { path: 'settings', component: SettingsComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
