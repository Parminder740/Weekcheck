import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { Day } from '@progress/kendo-date-math';
import { displayDate } from '../dashboard/events-utc';
import { sampleData } from './events-utc';

@Component({
  selector: 'app-schdeule',
  templateUrl: './schdeule.component.html',
  styleUrls: ['./schdeule.component.scss']
})
export class SchdeuleComponent implements OnInit {
  currTitle='VIEW SCHEDULE'
  currentView= 'WEEK'
  isAdmin:boolean=true
  isScheduler:boolean=true
  filterCount:any
  logo:boolean=true
  unpublishedCount=0
  events: SchedulerEvent[] = sampleData;
  weekStart: Day = Day.Wednesday;
  selectedDate: Date = displayDate;
  FilterOption:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  publish(a:any){

  }
  addNewShift(){

  }
  available(){

  }
  clearFilters(){

  }
  saveClickFilters(){

  }
  showFilters(){
   this.FilterOption = !this.FilterOption
    
  }
  viewWeekStats(){}
}
