import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeoff-create',
  templateUrl: './timeoff-create.component.html',
  styleUrls: ['./timeoff-create.component.scss']
})
export class TimeoffCreateComponent implements OnInit {
  currTitle='CREATE TIME OFF'
  logo:Boolean=true
  employeeName:any
  Form:any
  form:any
  model:any
  constructor() { }
  public value: Date = new Date(2019, 5, 1, 22);
  public format = "MM/dd/yyyy HH:mm";
  ngOnInit(): void {
  }
  reset(a:any){

  }
}
