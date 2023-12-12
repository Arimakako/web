import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  fashions:any;
  errMessage:string=''
  constructor(private _service: FashionApiService, private router: Router, private activateRoute: ActivatedRoute){
    this._service.getFashions().subscribe({
      next:(data)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  viewDetailFashion(f: any) {
    this.router.navigate(['admin-fashion-detail', f._id]);
  }
  editFashion(f: any) {
    this.router.navigate(['admin-fashion-edit', f._id]);
  }
  deleteFashion(_id: any) {
    if (window.confirm('Are you sure want to delete this fashion?')) {
      this._service.deleteFashion(_id).subscribe({
        next: () => {
          // Reload the page after deleting the product
          location.reload();
        },
        error: (err) => {
          this.errMessage = err;
        }
      });
    }
  }
  addFashion()
  {
    this.router.navigate(['admin-fashion-new']);
  }
}
