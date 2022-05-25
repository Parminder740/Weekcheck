import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
{path:"register",component:RegisterComponent},
{path:"",component:LoginComponent},
{path:"signin",component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
