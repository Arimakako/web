import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.css'
})
export class FashionDetailComponent {
  fashion:any;
  errMessage:string=''
  constructor(private _service: FashionApiService, private router: Router, private activateRoute: ActivatedRoute){
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchFashion(id);
      }
    });
  }
  searchFashion(Id: string) {
    this._service.getFashion(Id).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  goBack() {
    this.router.navigate(['fashion-admin']);
  }
}

