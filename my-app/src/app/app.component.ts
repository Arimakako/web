import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  global_data='Here is a message from App component'
  dataFromChild :any=null;
  WelcomeMessage = 'Hi Guest';
  DataFromChild :any=null;
  myValue=100;
  DataFromOtherComponent:any=null;
}