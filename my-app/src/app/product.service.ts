import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}
    getlistproduct(){
      let products = [
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
  return products; 
    }
    searchProduct(min: number, max: number) {
  let products = this.getlistproduct();
  let filter = products.filter(p => p.UnitPrice >= min && p.UnitPrice <= max);
  return filter;
}
}

