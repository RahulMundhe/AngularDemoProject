import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-component',
  templateUrl: './string-component.component.html',
  styleUrls: ['./string-component.component.css']
})
export class StringComponentComponent implements OnInit {
  public welcomeString: string = "Welcome to string Component !";
  public userText: string;
  constructor() { }

  ngOnInit() {

  }
  // public getInputTextValues(event) {
  //   this.userText = event.target.value;
  // }
  public changeStringText(userText) {
    this.welcomeString = userText;
    alert(this.welcomeString);
  }
}
