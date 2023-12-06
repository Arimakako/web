import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct2',
  templateUrl: './listproduct2.component.html',
  styleUrls: ['./listproduct2.component.css']
})
export class Listproduct2Component {
  products = [
    {"ProductID":"p1",
  "ProductName":"Coca",
  "UnitPrice":1000,
},
{"ProductID":"p2",
  "ProductName":"Pepsi",
  "UnitPrice":2000,
},
{"ProductID":"p3",
  "ProductName":"Sting",
  "UnitPrice":3000,
},
  ]
}
