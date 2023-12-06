import { Customer } from './../customer';
import { CustomerhttpService } from './../../../../ex_web/src/app/customerhttp.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-formbinding',
  templateUrl: './formbinding.component.html',
  styleUrls: ['./formbinding.component.css']
})
export class FormbindingComponent {
  Customer=new Customer('Teo Mong mo','teo@gmail.com','090909');

}
