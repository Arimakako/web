import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
@Input("AppcomponentData") public DataFromAppComponent:any
//tuy y dat ten bien
@Input('myValue') public myValue: any;
@Output() public childEvent=new EventEmitter();
sendDataToAppComponent(){
  let data={"id":123,
  "name":"Coca",
  "price":1000
 }
  this.childEvent.emit(data);
}
}
