import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 openSignin(){
   this.dialog.open(SigninComponent)
 }
}
