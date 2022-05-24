import { RouterModule, Routes } from '@angular/router';

import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:"register",component:RegisterComponent},
{path:"",component:LoginComponent},
{path:"addorjoin",component:AddOrJoinBussinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
