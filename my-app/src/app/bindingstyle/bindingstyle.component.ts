import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingstyle',
  templateUrl: './bindingstyle.component.html',
  styleUrls: ['./bindingstyle.component.css']
})
export class BindingstyleComponent {
  public isError:boolean=false
  public textStyle={
color:'darkorange',
fontSize:'26px'
}
  applyUppercase: boolean = false;

  toggleUppercase() {
    this.applyUppercase = !this.applyUppercase;
  }
}
