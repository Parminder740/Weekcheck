import { RouterModule, Routes } from '@angular/router';
import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
{path:"register",component:RegisterComponent},
{path:"login",component:LoginComponent},
{path:"addorjoin",component:AddOrJoinBussinessComponent},
{path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
