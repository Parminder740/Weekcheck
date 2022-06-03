import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BussinessSetComponent } from './bussiness-set/bussiness-set.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import {TabsModule} from 'ngx-tabset';

import { SigninComponent } from './signin/signin.component';
import { BussinessAdminModule } from './bussiness-admin/bussiness-admin.module';
import { AccSettingsComponent } from './acc-settings/acc-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { TimeoffCreateComponent } from './timeoff-create/timeoff-create.component';
import { TimeoffViewComponent } from './timeoff-view/timeoff-view.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ScheduleComponent } from './schedule/schedule.component';

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
    EmployeesComponent,
    AccSettingsComponent,
    ProfileComponent,
    TimeoffCreateComponent,
    TimeoffViewComponent,
    NotificationsComponent,
    ScheduleComponent,
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    TabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    BussinessAdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
