import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeoff-create',
  templateUrl: './timeoff-create.component.html',
  styleUrls: ['./timeoff-create.component.scss']
})
export class TimeoffCreateComponent implements OnInit {
  currTitle='CREATE TIME OFF'
  logo:Boolean=true
  constructor() { }

  ngOnInit(): void {
  }

}
