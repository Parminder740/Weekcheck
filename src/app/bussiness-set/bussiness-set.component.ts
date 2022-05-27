import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussiness-set',
  templateUrl: './bussiness-set.component.html',
  styleUrls: ['./bussiness-set.component.scss']
})
export class BussinessSetComponent implements OnInit {

  constructor() { }
task:any='setup.view.basic'
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
