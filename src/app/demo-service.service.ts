import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DemoServiceService {
  private localUrl = 'http://localhost:4200/assets/employee.json';

  constructor(private http: Http) { }

  getEmployeeData(): Observable<any> {
    console.log("local static URL" + this.localUrl);
    return this.http.get(this.localUrl)
      .map((employeeData) => employeeData.json());
  }

  getArray(): any[] {
    return [
      { "id": 1, "name": "Rahul", "Email_Id": "Rahulm@zedo.com" },
      { "id": 2, "name": "Rahul 2 ", "Email_Id": "Rahulmundhe@zedo.com" },
    ]
  }

}
