import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussiness-set',
  templateUrl: './bussiness-set.component.html',
  styleUrls: ['./bussiness-set.component.scss']
})
export class BussinessSetComponent implements OnInit {

  constructor() { }
task:any='setup.view.basic'
toggle1:boolean=false;
toggle2:boolean=false
toggle3:boolean=false
toggle4:boolean=false
toggle5:boolean=false
  ngOnInit(): void {
  }
  submitForm(v:any){
    console.log(v)
  
    switch(v){

      case  'setup.view.basic': this.task ='setup.view.basic' ;   this.toggle1=true; this.toggle2=false;this.toggle3=false;this.toggle4=false;this.toggle5=false; break;
      case  'setup.view.roles': this.task ='setup.view.roles';this.toggle1=false; this.toggle2=true;this.toggle3=false;this.toggle4=false;this.toggle5=false; break;
      case  'setup.view.payment': this.task ='setup.view.payment';this.toggle1=false; this.toggle2=false;this.toggle3=true;this.toggle4=false;this.toggle5=false; break;
      case  'setup.view.employees': this.task ='setup.view.employees'; this.toggle1=false; this.toggle2=false;this.toggle3=false;this.toggle4=true;this.toggle5=false; break;
      case  'setup.view.complete': this.task ='setup.view.complete'; this.toggle1=false; this.toggle2=false;this.toggle3=false;this.toggle4=false;this.toggle5=true; break ;
    }
   

  }

}
