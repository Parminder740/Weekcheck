import { RouterModule, Routes } from '@angular/router';

import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { BussinessSetComponent } from './bussiness-set/bussiness-set.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "addorjoin", component: AddOrJoinBussinessComponent },
  { path: "location-details", component: LocationDetailsComponent },

  {path: 'BussinessSetup', component:BussinessSetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
