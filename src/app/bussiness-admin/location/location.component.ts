import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  panelOpenState = false;
  task: any = false
  logo = true
  currTitle = 'LOCATIONS'
  businessCode = 12
  location: any
  locations: any
  open = true
  weekdays: any
  employeeGroup: any
  shiftGroup:any
  shiftRole:any
  admin:any
  scheduler:any
  locationGroup:any
  employeeGroupOpt:any
  constructor() { }

  ngOnInit(): void {
  }
  addLocation() {}
  toggleAccordion(a: any) {}
  editLocation() {}
  setSearchLocation() {}
  editEmployeeGroups() {}
  editShiftGroups() {}
  editShiftRoles() { }
  editAdmin() { }
  editSchedulers() { }
  editSchedulerGroups() { }
  deleteLocation() { }
  toggled(open: any) { }
  getGroupingOptionNames(a:any){}
  pageChangeHandler(){}
}