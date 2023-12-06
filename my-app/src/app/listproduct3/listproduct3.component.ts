import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct3',
  templateUrl: './listproduct3.component.html',
  styleUrls: ['./listproduct3.component.css']
})
export class Listproduct3Component {
  products:any;
  constructor(private ProductService:ProductService){
    this.products=ProductService.getlistproduct();
  }
}
