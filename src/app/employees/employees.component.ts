import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  panelOpenState = false;
  logo:boolean=true
  task: any = false
  location: any
  searchText = []
  pageSize: any
  filterCount: any
  isAdmin: boolean = true
  isScheduler: boolean = true
  employee: any
  selectedEmployees = []
  selectedEmployee = []
  selectedEmployeeLocationObj: any
  locationID: any
  pref: any
  filterSelects: any
  open: boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  filterData() {
    this.task = !this.task
    console.log(this.task)
  }

  addEmployee() {

  }
  showFilters() {

  }
  seniortyList() {

  }
  sendEmail() {

  }
  isMultipleEmployeesSelected() {

  }
  clearFilters() {

  }
  saveFilters() {

  }
  editMultipleEmployeesLocation() {

  }
  dropDownOnAnyClick(a: any) {

  }
  editMultipleEmployeesRoles() {

  }
  editMultipleEmployeesGroups() {

  }

  checkboxClick(a: any) {

  }
  toggleAccordion(a: any) {

  }
  selectedLocation() {

  }
  emailEmployee() {

  }
  editProfile() {

  }
  editAccess() {

  }
  editRoles() {

  }
  editGroups() {

  }
  editLocations() {

  }
  disable() {

  }
  formatStartDate() {

  }
  editDateOfHire() {

  }
  isAllDay(a: any) {

  }
  toggled(a: any) {

  }
}
