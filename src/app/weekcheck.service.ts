import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { registerEscClick } from 'ngx-bootstrap/utils';
@Injectable({
  providedIn: 'root'
})
export class WeekcheckService {
  token:any;
 
  constructor(private http: HttpClient) { 
  
  }


  employeeLogin(data:any) {

  
    return this.http.post("http://weekcheck.azurewebsites.net/Token",data )
}
employee() {
 // return this.http.get(`${this.headers}+https://weekcheck.com/wkapi/employees/me` {} ,)
}
}


