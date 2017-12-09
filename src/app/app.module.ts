import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StringComponentComponent } from './string-component/string-component.component';
import { ArrayComponenetComponent } from './array-componenet/array-componenet.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MatCheckboxModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'StringComponent', component: StringComponentComponent },
  { path: 'ArrayComponent', component: ArrayComponenetComponent },
  { path: 'MaterialDemoComponent', component: MaterialDemoComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    StringComponentComponent,
    ArrayComponenetComponent,
    MaterialDemoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
