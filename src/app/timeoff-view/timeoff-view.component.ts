import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeoff-view',
  templateUrl: './timeoff-view.component.html',
  styleUrls: ['./timeoff-view.component.scss']
})
export class TimeoffViewComponent implements OnInit {
  currTitle:any
  request:any
  bunty:any
  constructor() { }

  ngOnInit(): void {
  }

}
