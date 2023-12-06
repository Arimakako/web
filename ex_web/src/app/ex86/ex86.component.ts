import { Component } from '@angular/core';

@Component({
  selector: 'app-ex86',
  templateUrl: './ex86.component.html',
  styleUrls: ['./ex86.component.css']
})
export class Ex86Component {
data=[  {"ProductId":"p1","ProductName":"Coca","Price":100,
"Image":"assets/images/coca.jpg"}]
  constructor() { }
  getproducts()
{
return this.data
}
}
