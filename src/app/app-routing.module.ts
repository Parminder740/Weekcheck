import { RouterModule, Routes } from '@angular/router';
import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { BussinessSetupComponent } from './bussiness-setup/bussiness-setup.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "addorjoin", component: AddOrJoinBussinessComponent },
  { path: "location-details", component: LocationDetailsComponent },
  { path: "business-setup", component: BussinessSetupComponent},
  { path: "employees", component: EmployeesComponent},
  { path: "BussinessSetup", component: BussinessSetupComponent},
  { path: "dashboard", component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
