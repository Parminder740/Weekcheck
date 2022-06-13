import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { WeekcheckService } from "../weekcheck.service";
import { FormControl,FormGroup } from '@angular/forms';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any
  email= new FormControl('')
  password= new FormControl('')
  token:any
  token_value: any;
  constructor(public dialog: MatDialog, private loginService: WeekcheckService) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  checkEmployee() {

    this.data= `username=${this.email.value}&password=${this.password.value}&grant_type=password`;
    this.loginService.employeeLogin(this.data).subscribe((token)=>{
          this.token_value=token
     localStorage.setItem("token",JSON.stringify(this.token_value.access_token))
    }
    )
  //  this.loginService.employee().subscribe((r)=>console.log("new",r))
  }
}
