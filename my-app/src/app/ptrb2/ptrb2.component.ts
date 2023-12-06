import { Component } from '@angular/core';

@Component({
  selector: 'app-ptrb2',
  templateUrl: './ptrb2.component.html',
  styleUrls: ['./ptrb2.component.css']
})
export class Ptrb2Component {
  public hesoa: string='';
  public hesob: string='';
  public hesoc: string='';
  public ketqua: string='';
  XuliGiai(){
    let a=parseFloat(this.hesoa);
    let b=parseFloat(this.hesob);
    let c=parseFloat(this.hesoc);
    if (a==0){
      if(b==0){
        if(c==0){
          this.ketqua='Phương trình vô số nghiệm';
        }
        else{
          this.ketqua='Phương trình vô nghiệm';
        }
      }
      else{
        this.ketqua='x='+(-c/b);
      }
    }
    else{
      let delta = b*b - 4*a*c;
      if(delta < 0){
        this.ketqua = 'Phương trình vô nghiệm';
      }
      else if(delta == 0){
        let x = -b/(2*a);
        this.ketqua = 'x='+x;
      }
      else{
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        this.ketqua = ' x1='+x1+', x2='+x2;
      }
    }
  }
}
