import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
<<<<<<< HEAD
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SigninComponent } from './signin/signin.component';
=======
import { LocationDetailsComponent } from './location-details/location-details.component';

>>>>>>> aaba1ef5b43cfa4474cd581a7a330fe2f021d7f4
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
    SigninComponent
=======
    LocationDetailsComponent
>>>>>>> aaba1ef5b43cfa4474cd581a7a330fe2f021d7f4
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
