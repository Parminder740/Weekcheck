import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isSidenav: boolean = true
  panelOpenState = false;
  showFiller = false;
  logo: boolean = true
  isBA: boolean = false
  isTO: boolean = false
  isNotif: boolean = false
  isHeader: boolean = true
  navbarCollapsed: boolean = false;
  open: any;
  notifications = [];
  messages = [];
  remainderImg: boolean = false;
  businesses = [];

  business = {
    locations: []
  }
  accorWaiting={
    isOpen: false
  }
  approvedTimeOffs=[]
  declinedTimeOffs=[]
  accorApproved={isOpen:false}
  accorDeclined={
    isOpen:false
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

  doSomeCoolStaff(){

  }


}
