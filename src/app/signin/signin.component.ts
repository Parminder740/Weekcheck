import { Component, OnInit } from '@angular/core';
import { WeekcheckService } from "../weekcheck.service";
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  model:any
  regForm:any
forms= new FormGroup({
firstName: new FormControl(''),
lastName:  new FormControl(''),
email:  new FormControl(''),
pass:  new FormControl(''),
pass2:  new FormControl(''),

}) 

  constructor(private service:WeekcheckService) { }

  ngOnInit(): void {
  }
submit(){
  // this.service.employee().subscribe((r)=>console.log(r))
}
}
