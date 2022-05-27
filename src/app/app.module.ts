import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { BussinessSetComponent } from './bussiness-set/bussiness-set.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddOrJoinBussinessComponent,
    SigninComponent,
    LocationDetailsComponent,
    DashboardComponent,
    BussinessSetComponent,
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
