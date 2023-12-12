import { Component } from '@angular/core';
import { Fashion } from '../Fashion';
import { FashionApiService } from '../fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-fashion-style',
  templateUrl: './fashion-style.component.html',
  styleUrl: './fashion-style.component.css'
})
export class FashionStyleComponent {
  style: string = ''
  styleselected: string = '' 
  styles: string[] = [] 
  fashions: any
  selectedStyleFashions: Fashion[] = [] 
  fashion: any 
  errMessage: string = ''

  constructor(private _service: FashionApiService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this.getFashions() 
    this._activeRoute.params.subscribe(params => {
      this.styleselected = params['style'] 
      console.log(this.styleselected)
      if (this.styleselected != null) {
        this.getFashionsByStyle(this.styleselected) 
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
      next: (data) => { this.selectedStyleFashions = data },
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
    if (style === 'All Style') {

      this._router.navigate(['client-fashions']); 
    } else if (style !== '') {

      this._router.navigate(['fashion-style', style]);
    }
  }
}
