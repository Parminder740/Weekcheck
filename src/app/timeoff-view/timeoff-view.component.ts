import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeoff-view',
  templateUrl: './timeoff-view.component.html',
  styleUrls: ['./timeoff-view.component.scss']
})
export class TimeoffViewComponent implements OnInit {
  bunty:any
  logo:boolean=true
  currTitle='VIEW TIME OFF'
  request={}
  // request={"statusText":"timeoffview","startTimeDisplay":"10:00" ,"lastModifiedDisplay":"at 12:00"}
  constructor() { }

  ngOnInit(): void {
  }

}
