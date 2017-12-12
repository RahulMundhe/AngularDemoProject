import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service'

@Component({
  selector: 'app-array-componenet',
  templateUrl: './array-componenet.component.html',
  styleUrls: ['./array-componenet.component.css'],
  providers:[DemoServiceService]
})
export class ArrayComponenetComponent implements OnInit {
public arraylist= ["one", "two", "three", "four","five"];

public arrayInput: any[] = [];
constructor(private arrayServiceInput: DemoServiceService) { }

  ngOnInit() {
    this.arrayInput = this.arrayServiceInput.getArray();
    console.log("array received from service in Array Component");
  }

  addElementInArray(str){
    if(str && str !== ""){
      if(str && !(this.arraylist.indexOf(str) > -1)){
        this.arraylist.push(str);
      } else {
        let dialogueBox = window.confirm("Entered value already exist in array. Do u want to add it again ? ");
        (dialogueBox == true ) ? this.arraylist.push(str) : false ;
      }
      
    } else {
      alert("array value can't be empty" );
    }

  }

}
