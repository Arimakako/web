import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  public name:string="Trần Duy Thanh"
  public email:string="thanhtd@uel.edu.vn"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=true

}
