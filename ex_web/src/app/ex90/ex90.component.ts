import { Component } from '@angular/core';
import { ProducthttpService } from '../producthttp.service';
@Component({
  selector: 'app-ex90',
  templateUrl: './ex90.component.html',
  styleUrls: ['./ex90.component.css']
})
export class Ex90Component {
  products:any;
  constructor(private _service: ProducthttpService){
  this._service.getProducts().subscribe({
  next:(data)=>{this.products=data}
  })
  }
}
