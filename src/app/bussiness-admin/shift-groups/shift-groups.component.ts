import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-groups',
  templateUrl: './shift-groups.component.html',
  styleUrls: ['./shift-groups.component.scss']
})
export class ShiftGroupsComponent implements OnInit {
  currTitle ="SHIFT GROUPS"
  shiftGroups:any
  shiftGroup:any
  groupOption:any
  pageSize:any
  constructor() { }

  ngOnInit(): void {
  }

}
