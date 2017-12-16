import { Component, OnInit, Injectable } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { DemoServiceService } from '../demo-service.service';
import { MatTableDataSource } from '@angular/material';
import { Element } from '../Utility';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css'],
  providers: [DemoServiceService]
})


export class MaterialDemoComponent implements OnInit {
  //@Input('aria-label') arialabel:string = "please Check me";
  private defaultString: string = "please tick me";
  labelPosition: string = "before";
  public dataSource: any;
  public elementData: Element[] = [];
  public displayedColumns = ["employeeCode", "firstName", "lastName", "jobTitleName", "emailAddress"];

  constructor(private arrayServiceInput: DemoServiceService) {
  }

  ngOnInit() {
    this.getEmpData().then((empJsonData) => {
      let empData = empJsonData;
      for (let element in empData) {
        if (element) {
          let obj: Element = {
            jobTitleName : "Default",
            firstName : "Default",
            lastName : "Default" ,
            employeeCode : "Default" ,
            emailAddress : "Default" ,
          };
          obj.emailAddress = empData[element].emailAddress;
          obj.employeeCode = empData[element].employeeCode;
          obj.firstName = empData[element].firstName;
          obj.lastName = empData[element].lastName;
          obj.jobTitleName = empData[element].jobTitleName;

          this.elementData.push(obj);

        }
      }
      this.dataSource = new MatTableDataSource<Element>(this.elementData);
    }).catch((e: Error) => {
      alert(e);
    });

  }



  getEmpData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.arrayServiceInput.getEmployeeData()
      .subscribe((responseData) => {
        resolve(responseData);
      });
    });
  }


  onChecked(value: boolean) {
    //confirm("u want to check this checkbox ?" );
    alert(value);
    if (value) {
      this.labelPosition = "before";
    } else {
      this.labelPosition = "after";
    }
  }

}
