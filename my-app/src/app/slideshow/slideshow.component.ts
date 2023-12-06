import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  public imageindex: number = 0;
  changeImage1() {
    this.imageindex = 1
  }
  changeImage2() {
    this.imageindex = 2
  }
  public fruits=['apple','orange','banana','mango']
}
