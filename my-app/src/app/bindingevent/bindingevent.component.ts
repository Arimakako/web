import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingevent',
  templateUrl: './bindingevent.component.html',
  styleUrls: ['./bindingevent.component.css']
})
export class BindingeventComponent {
    onClick(event:any){
    alert(event.pointerId)
    }
    onSubmit(value:string){
    alert(value)
    }
    a: number=0;
    b: number=0;
    result: number=0;
  
    plus(): void {
      this.result = this.a + this.b;
    }
  
    subtract(): void {
      this.result = this.a - this.b;
    }
  
    multiply(): void {
      this.result = this.a * this.b;
    }
  
    divide(): void {
      if (this.b !== 0) {
        this.result = this.a / this.b;
      } else {
        this.result = NaN; // Handle division by zero
      }
    }
  
    reset(): void {
      this.a = 0;
      this.b = 0;
      this.result = 0;
    }

}
