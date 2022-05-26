import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussiness-setup',
  templateUrl: './bussiness-setup.component.html',
  styleUrls: ['./bussiness-setup.component.scss']
})
export class BussinessSetupComponent implements OnInit {
task:any='setup.view.basic'
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(v:any){
    console.log(v)
    switch(v){
      case  'setup.view.basic': this.task ='setup.view.basic'; break;
      case  'setup.view.roles': this.task ='setup.view.roles'; break;
      case  'setup.view.payment': this.task ='setup.view.payment'; break;
      case  'setup.view.employees': this.task ='setup.view.employees'; break;
      case  'setup.view.complete': this.task ='setup.view.complete'; break ;
    }
    console.log(this.task)

  }

}
