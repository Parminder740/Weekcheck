import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { Day } from '@progress/kendo-date-math';
import { sampleData, displayDate } from './events-utc';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isSidenav: boolean = true
  panelOpenState = false;
  showFiller = false;
  logo: boolean = true
  isBA: boolean = false
  isTO: boolean = false
  isNotif: boolean = false
  isHeader: boolean = true
  selectedDate: Date = displayDate;
  events: SchedulerEvent[] = sampleData;
  weekStart: Day = Day.Tuesday;
  navbarCollapsed: boolean = false;
  open: any;
  notifications = [];
  messages = [];
  remainderImg: boolean = false;
  businesses = [];
  business = {
    locations: []
  }


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    let element: any = document.getElementById("sidenav");
    element.classList.toggle("is-collapsed");
    this.logo = !this.logo
    this.isHeader = !this.isHeader
  }

  getUnviewedNotificationsList() {

  }
  // userActions.logout()
  logout() {

  }

  togglesidebar(type: any) {

  }

  toggled(open: any) {

  }

  setReminderOff() {

  }

  setReminderOn() {

  }

  changeLocation(location: any) {

  }

}
