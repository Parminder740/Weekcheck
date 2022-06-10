import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currTitle="EMPLOYEE INFO"
  formatStartDate:any
  userInfo:any
  displayReminderTime:any
  logo=true
  editMode=0
  
  // obj={
  //   flow:{
  //     files:{
  //       length: {}
  //     },
  //     cancel:()=>{}
  //   }
    // }
    noImage:boolean=true
   
  
toggle:boolean=false
  displayNotificationPref:any
  constructor() { }
  reminderOptions = [
    { id: 0, value: '0', display: 'Turn reminders off' },
    { id: 15, value: '15', display: '15 minutes' },
    { id: 30, value: '30', display: '30 minutes' },
    { id: 45, value: '45', display: '45 minutes' },
    { id: 60, value: '60', display: '1 hour' },
    { id: 75, value: '75', display: '1 hour and 15 minutes' },
    { id: 90, value: '90', display: '1 hour and 30 minutes' },
    { id: 105, value: '105', display: '1 hour and 45 minutes' },
    { id: 120, value: '120', display: '2 hours' },
    { id: 135, value: '135', display: '2 hours and 15 minutes' },
    { id: 150, value: '150', display: '2 hours and 30 minutes' },
    { id: 165, value: '165', display: '2 hours and 45 minutes' },
    { id: 180, value: '180', display: '3 hours' },
    { id: 195, value: '195', display: '3 hours and 15 minutes' },
    { id: 210, value: '210', display: '3 hours and 30 minutes' },
    { id: 225, value: '225', display: '3 hours and 45 minutes' },
    { id: 240, value: '240', display: '4 hours' },
    { id: 255, value: '255', display: '4 hours and 15 minutes' },
    { id: 270, value: '270', display: '4 hours and 30 minutes' },
    { id: 285, value: '285', display: '4 hours and 45 minutes' },
    { id: 300, value: '300', display: '5 hours' },
    { id: 720, value: '720', display: '12 hours' },
    { id: 1440, value: '1440', display: '24 hours' }

];
  ngOnInit(): void {
  }
editmode(){
 this.toggle=true
}
save(){}
cancel(){}
removeImage(){}
openChangeEmail(){}
}
