import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  myVar: string = "Hello Angular";

  getMyVar(): string {
    return this.myVar;
  }

  getAllCapitalLetters(): string {
    return this.myVar.replace(/[^A-Z]/g, '');
  }

  getAllLowercaseLetters(): string {
    return this.myVar.replace(/[^a-z]/g, '');
  }

}
