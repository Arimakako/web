import { Component } from '@angular/core';
import { CustomerhttpService } from '../customerhttp.service';

@Component({
  selector: 'app-ex93',
  templateUrl: './ex93.component.html',
  styleUrls: ['./ex93.component.css']
})
export class Ex93Component {
  customerTypes:any;
  constructor(private _service: CustomerhttpService){
  this._service.getCustomerTypes().subscribe({
  next:(data)=>{this.customerTypes=data}
  })
  }
}
