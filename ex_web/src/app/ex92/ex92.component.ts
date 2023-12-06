import { Component } from '@angular/core';

@Component({
  selector: 'app-ex92',
  templateUrl: './ex92.component.html',
  styleUrls: ['./ex92.component.css']
})
export class Ex92Component {
  customer = [{
    "Id": "Cus123",
    "Name": "Obama",
    "Email": "obama@gmail.com",
    "Age": 67,
    "Image": "assets/avatars/obama-avatar.png"
  }];
  getcustomer()
  {
  return this.customer
  }
}
