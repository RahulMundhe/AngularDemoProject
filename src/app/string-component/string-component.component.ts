import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service'

@Component({
  selector: 'app-string-component',
  templateUrl: './string-component.component.html',
  styleUrls: ['./string-component.component.css'],
  providers: [DemoServiceService]
})
export class StringComponentComponent implements OnInit {
  public welcomeString: string = "Welcome to string Component !";
  public userText: string;
  public arrayInput: any[] = [];
  constructor(private arrayServiceInput: DemoServiceService) { }

  ngOnInit() {
    this.arrayInput = this.arrayServiceInput.getArray();
    console.log("array received from service in String component ");
  }
  // public getInputTextValues(event) {
  //   this.userText = event.target.value;
  // }
  public changeStringText(userText) {
    this.welcomeString = userText;
    alert(this.welcomeString);
  }
}
