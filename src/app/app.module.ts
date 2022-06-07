import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AddOrJoinBussinessComponent } from './add-or-join-bussiness/add-or-join-bussiness.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BussinessAdminModule } from './bussiness-admin/bussiness-admin.module';
import { BussinessSetComponent } from './bussiness-set/bussiness-set.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DropdownModule} from 'primeng/dropdown';
import { EmployeesComponent } from './employees/employees.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SchdeuleComponent } from './schdeule/schdeule.component';
import { SchedulerModule } from "@progress/kendo-angular-scheduler";
import { SettingsComponent } from './settings/settings.component';
import { SigninComponent } from './signin/signin.component';
import {TabsModule} from 'ngx-tabset';
import { TimeoffCreateComponent } from './timeoff-create/timeoff-create.component';
import { TimeoffViewComponent } from './timeoff-view/timeoff-view.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

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
    LayoutComponent,
    FooterComponent,
    NotificationComponent,
    SettingsComponent,
    ProfileComponent,
    TimeoffViewComponent,
    TimeoffCreateComponent,
    SchdeuleComponent,
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
    TabsModule,
     MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatCardModule,
    SchedulerModule,
    BussinessAdminModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
