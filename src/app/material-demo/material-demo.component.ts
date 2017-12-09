import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css']
})
export class MaterialDemoComponent implements OnInit {
  //@Input('aria-label') arialabel:string = "please Check me";
  private defaultString: string = "please tick me";
  labelPosition: string = "before";

  constructor() { }

  ngOnInit() {
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
