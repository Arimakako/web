import { Component } from '@angular/core';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-listproduct4',
  templateUrl: './listproduct4.component.html',
  styleUrls: ['./listproduct4.component.css']
})
export class Listproduct4Component {
 products:any;
 constructor(ps:ProductService){
   this.products=ps.getlistproduct();

 }
}
