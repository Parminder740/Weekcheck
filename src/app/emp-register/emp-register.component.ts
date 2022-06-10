import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.scss']
})
export class EmpRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatDate:any
  reqitem:any
  sentRequests:any
  sentRequest:any
  formatTime:any
  employeeRequests:any
  getRequestCount:any
  even:any
}
