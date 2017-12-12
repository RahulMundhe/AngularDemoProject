import { Injectable } from '@angular/core';

@Injectable()
export class DemoServiceService {

  constructor() { }

  getArray(): any[] {
    return [
      { "id": 1, "name": "Rahul", "Email_Id": "Rahulm@zedo.com" },
      { "id": 2, "name": "Rahul 2 ", "Email_Id": "Rahulmundhe@zedo.com" },
    ]
  }

}
