import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StringComponentComponent } from './string-component/string-component.component';
import { ArrayComponenetComponent } from './array-componenet/array-componenet.component';


@NgModule({
  declarations: [
    AppComponent,
    StringComponentComponent,
    ArrayComponenetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
