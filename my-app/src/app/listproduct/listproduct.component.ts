import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
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
