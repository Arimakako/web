import { Component } from '@angular/core';

@Component({
  selector: 'app-ex87',
  templateUrl: './ex87.component.html',
  styleUrls: ['./ex87.component.css']
})
export class Ex87Component {
datas=[{"ProductId":"p1","ProductName":"Coca","Price":100,
"Image":"assets/images/coca.jpg"},
{"ProductId":"p2","ProductName":"Pepsi","Price":300,
"Image":"assets/images/pepsi.jpg"},
{"ProductId":"p3","ProductName":"Sting","Price":200,
"Image":"assets/images/sting.jpg"},]

getproducts()
{
return this.datas
}
}