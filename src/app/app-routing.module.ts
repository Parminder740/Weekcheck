import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
<<<<<<< HEAD
{path:"register",component:RegisterComponent},
{path:"",component:LoginComponent},
{path:"signin",component:SigninComponent}
=======
  { path: "register", component: RegisterComponent },
  { path: "", component: LoginComponent },
  { path: "location-details", component: LocationDetailsComponent }

>>>>>>> aaba1ef5b43cfa4474cd581a7a330fe2f021d7f4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
