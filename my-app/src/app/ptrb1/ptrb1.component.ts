import { Component } from '@angular/core';

@Component({
  selector: 'app-ptrb1',
  templateUrl: './ptrb1.component.html',
  styleUrls: ['./ptrb1.component.css']
})
export class Ptrb1Component {
  public hesoa: string='';
  public hesob: string='';
  public ketqua: string='';
  XuliGiai(){
    let a=parseFloat(this.hesoa);
    let b=parseFloat(this.hesob);
    if(a==0){
      if(b==0){
        this.ketqua='Phương trình vô số nghiệm';
      }
      else{
        this.ketqua='Phương trình vô nghiệm';
      }
    }
    else{
      this.ketqua='Phương trình có nghiệm là: x='+(-b/a);
    }

  }
}
