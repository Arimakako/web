import { Component } from '@angular/core';

import { FakeProductService } from '../fake-product.service';

@Component({
  selector: 'app-fake-product2',
  templateUrl: './fake-product2.component.html',
  styleUrls: ['./fake-product2.component.css']
})
export class FakeProduct2Component {
  data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
  _service.getFakeProductData().subscribe({
  next:(data)=>{ this.data=data},
  error:(err)=>{
  this.errMessage=err
  }
  })
  }
}
