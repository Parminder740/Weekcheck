import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
 openSignin(){
   this.dialog.open(SigninComponent)
 }
}
