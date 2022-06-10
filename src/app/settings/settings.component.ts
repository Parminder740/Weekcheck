import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  currTitle="ACCOUNT SETTINGS"
  currency:any
  selected:any
  currentNumberEmployees:any
  subscriptionFinished:any
  logo=true
  couponcode:any
  model:any
  card:any
  constructor() {
    this.selected = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }
  selectedPlan={"price":1,"maxEmployees":33, "currency":8}
  currentSubscriptionPlan={"price":1,"maxEmployees":33}
  ngOnInit(): void {
  }

}
