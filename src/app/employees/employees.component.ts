import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface User {
  name: string;
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  panelOpenState = false;
  logo: boolean = true
  task: any = false
  location: any
  searchText = []
  pageSize: any
  filterCount=0
  isScheduler: boolean = true
  selectedEmployees = []
  selectedEmployee = {
    userID: 12
  }
  selectedLocation: any = {
    locationID: 12
  }
  user = {
    isAdmin: () => {
      return false
    }
  }
  employee = {
    employeeID: 12,
    isBusinessAdmin: true,
    isBusinessOwner: true,
    scheduler: true
  }
  selectedEmployeeLocationObj: any= {
    "12":{
      groupingOptions: [],
      schedulerFocus:[]
    }
  };
  locationID: any
  thisUser = {
    employeeID: 12,
    isAdmin: () => {
      return false
    }
  }
  isOpen: any
  even: any
  model = {
    firstName: 'Parminder',
    email:'abc@gmail.com',
    lastName: 'singh'
  }
  sendInvite = {
    send: true
  }
  title: any
  message: any
  locationsHasError: any
  locationsHasSuccess: any
  pref: any
  filterSelects: any
  open: boolean = true
  daysOfWeek=[]
  selectedEmployeePreferences=[
    {
      type:12
    }
   
  ]
  filterOption: boolean = false
  objemployee: any
  item: any
  myControl = new FormControl('');
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions:any
  accorEmployees = {
    isOpen: true
  };
  selectedCar: any = {};

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  openEmployeeRequests = [];
  thisSchedFocusOptions = [];
  sortType = 'firstName';
  sortReverse = true;
  employeeList = [{
    firstName: 'Parminder',
    hireDate:new Date(),
    lastName: 'singh'
  }]
  businessRoles = []

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );

  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  filterData() {
    this.task = !this.task
    console.log(this.task)
  }

  addEmployee() {

  }
  sendEMailBulk(){

  }
  selectAllLocations(){

  }
  resetLocations(){

  }
  showFilters() {
    this.filterOption = !this.filterOption
  }
  seniortyList() {

  }
  sendEmail() {

  }
  isAdmin() {

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
  // selectedLocation() {
  // }
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
  onLocationChange() { }
  onFilterGroupChange(a: any) { }





}
