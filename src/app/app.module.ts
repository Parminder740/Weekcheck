import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
<<<<<<< HEAD
import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
=======
<<<<<<< HEAD
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SigninComponent } from './signin/signin.component';
=======
import { LocationDetailsComponent } from './location-details/location-details.component';
>>>>>>> 3f1db2d21a50a3fb90be0104587eec43cf783659

>>>>>>> aaba1ef5b43cfa4474cd581a7a330fe2f021d7f4
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
    AddOrJoinBussinessComponent
=======
<<<<<<< HEAD
    SigninComponent
=======
    LocationDetailsComponent
>>>>>>> aaba1ef5b43cfa4474cd581a7a330fe2f021d7f4
>>>>>>> 3f1db2d21a50a3fb90be0104587eec43cf783659
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
