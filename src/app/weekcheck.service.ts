import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { registerEscClick } from 'ngx-bootstrap/utils';
@Injectable({
  providedIn: 'root'
})
export class WeekcheckService {

  constructor(private http: HttpClient) { }
  header = "https://weekcheck.com/wk"

  Acc_register(data: any) {
    return this.http.post(this.header + "api/Account/Register", data)
  }
  employeeLogin() {
    return this.http.get("http://weekcheck.azurewebsites.net/Token")
  }
}


