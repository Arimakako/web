import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionApiService } from '../fashion-api.service';
import { Fashion } from '../Fashion';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.css'
})
export class FashionDetailComponent {
  fashion = new Fashion() 
  id: string = ''
  errMessage: string = ''

  constructor(private _service: FashionApiService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null) {
        this.searchFashion(this.id)
      }
      else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['client-fashions'])
      }
    })
  }

  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
