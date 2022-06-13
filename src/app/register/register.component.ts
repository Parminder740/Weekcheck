import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';
import { WeekcheckService } from '../weekcheck.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data: any
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');


  constructor(
    public service: WeekcheckService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  openSignin() {
    this.data = { "firstName": this.firstName.value, "lastName": this.lastName.value, "email": this.email.value }
    this.service.sendMail(this.data).subscribe()
    // this.dialog.open(SigninComponent)

  }
}
