import { Component } from '@angular/core';
import { ProducthttpService } from './../producthttp.service';
@Component({
  selector: 'app-listproduct7',
  templateUrl: './listproduct7.component.html',
  styleUrls: ['./listproduct7.component.css']
})
export class Listproduct7Component {
  products:any=null;
  constructor(private ps:ProducthttpService){
    this.ps.getProduct().subscribe((data)=>{
      next:(data: any)=>{
        this.products=data;
      }
  })
  }
}
