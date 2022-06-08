import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-group',
  templateUrl: './emp-group.component.html',
  styleUrls: ['./emp-group.component.scss']
})
export class EmpGroupComponent implements OnInit {

  currTitle="EMPLOYEE GROUPS"
  employeeGroups:any
  employeeGroup:any
  groupOption:any
  accorGroups:any
  logo:boolean=true
  constructor() { }

  ngOnInit(): void {
  }

  editGrouping(a:any){

  }
  deleteBusinessGrouping(a:any){

  }
  addGrouping(){

  }
}
