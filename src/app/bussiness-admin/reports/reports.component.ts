import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  logo=true
  selLoc:any
  startTime:any
  endTime:any
  even:any
  constructor() { }

  ngOnInit(): void {
  }

}
