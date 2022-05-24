import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
=======
import { LocationDetailsComponent } from './location-details/location-details.component';
>>>>>>> 3f1db2d21a50a3fb90be0104587eec43cf783659
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
{path:"register",component:RegisterComponent},
{path:"",component:LoginComponent},
<<<<<<< HEAD
{path:"addorjoin",component:AddOrJoinBussinessComponent}
=======
{path:"signin",component:SigninComponent}
>>>>>>> 3f1db2d21a50a3fb90be0104587eec43cf783659
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
