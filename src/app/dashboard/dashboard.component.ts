import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  showFiller = false;
  logo:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
this.logo=!this.logo
}
}