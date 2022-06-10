import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { WeekcheckService } from "../weekcheck.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any
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
    this.loginService.employeeLogin().subscribe((data) => {
      console.log(data)
    })
  }
}
