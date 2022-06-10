import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.scss']
})
export class EmpRegisterComponent implements OnInit {
  formatDate:any
  reqitem:any
  sentRequests:any
  sentRequest:any
  formatTime:any
  employeeRequests:any
  getRequestCount:any
  even:any
  constructor() { }

  ngOnInit(): void { }
  
  approve(a:any){}
  deny(reqitem:any){}
  view(reqitem:any){}
  updateEmail(sentRequest:any){}
  resendEmail(sentRequest:any){}
}
