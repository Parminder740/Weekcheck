import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { registerEscClick } from 'ngx-bootstrap/utils';
@Injectable({
  providedIn: 'root'
})
export class WeekcheckService {
  baseURL="http://weekcheck.azurewebsites.net/"
  token: any=localStorage.getItem('token');
  constructor(private http: HttpClient) {}

  employeeLogin(data: any) {
    return this.http.post(`${this.baseURL}Token`, data)
  }
  // employee() {
  //   let headers={
  //     'Content-Type': 'application/json',
  //     Authorization:"Bearer " + this.token
  //   }
  //   return this.http.get(`https://weekcheck.com/wkapi/employees/me` ,{headers})
  // }
sendMail(data:any){
  let headers={
    'Content-Type': 'application/json',
    Authorization:"Bearer " + this.token
  }
  return this.http.post(`${this.baseURL}wkapi/Employees` ,data)
}

employee(){
  let headers={
    'Content-Type': 'application/json',
    Authorization:"Bearer " + this.token
  }
  return this.http.get(`${this.baseURL}wkapi/Employees`)
}

}





// http://localhost:51804/wkapi/Employees