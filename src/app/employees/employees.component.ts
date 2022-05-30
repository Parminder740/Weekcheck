import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  panelOpenState = false;
  task:any=false
  constructor() { }

  ngOnInit(): void {
  }
filterData(){
this.task = !this.task
console.log(this.task)
}

}
