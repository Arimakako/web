import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../Fashion';

@Component({
  selector: 'app-client-fashions',
  templateUrl: './client-fashions.component.html',
  styleUrl: './client-fashions.component.css'
})
export class ClientFashionsComponent {
  style: string = ''
  styles: string[] = [] 
  fashions: any
  selectedStyleFashions: Fashion[] = [] 
  fashion: any 
  errMessage: string = ''

  constructor(private _service: FashionApiService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this.getFashions()
    this._activeRoute.params.subscribe(params => {
      this.style = params['style'] 
      if (this.style != null) {
        this.getFashionsByStyle(this.style) 
      }
    })
  }


  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data, this.getStyles() },
      error: (err) => { this.errMessage = err }
    })
  }


  getStyles() {
    this.styles = []
    for (let fashion of this.fashions) {
      if (!this.styles.includes(fashion.style)) {
        this.styles.push(fashion.style)
      }
    }
  }

  getFashionsByStyle(style: string) {
    this._service.getFashionsByStyle(style).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  tempFashionsByStyle(style: string) {
    var tempFashions: Fashion[] = []
    for (let fashion of this.fashions) {
      if (fashion.style == style) {
        tempFashions.push(fashion)
      }
    }
    return tempFashions
  }

  getFashionsById(id: string) {
    this._service.getFashion(id).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }


  detailFashion(fashionId: string) {
    this._router.navigate(['fashion-detail', fashionId])
  }


  fashionsByStyle(style: string) {
    this._router.navigate(['fashion-style', style])
  }
}
