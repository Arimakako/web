import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingclass',
  templateUrl: './bindingclass.component.html',
  styleUrls: ['./bindingclass.component.css']
})
export class BindingclassComponent {
  public success="text-success"
  public error="text-error"
  public primary="text-primary"
  public normal="text-normal"
  public multiClass={
  "text-primary":true,
  "text-normal":true,
  "text-error":true
  }
  public textComplexityClass = "text-complexity"
}
