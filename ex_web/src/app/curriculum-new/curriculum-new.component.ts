import { Component } from '@angular/core';
import { CurriculumService } from '../curriculum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from '../curriculum';
@Component({
  selector: 'app-curriculum-new',
  templateUrl: './curriculum-new.component.html',
  styleUrls: ['./curriculum-new.component.css']
})
export class CurriculumNewComponent {
  curriculum=new Curriculum();
  curriculums:any
  errMessage:string=''
  constructor(private _service: CurriculumService, private router: Router, private activateRoute: ActivatedRoute){
  this._service.getCurriculums().subscribe({
    next:(data)=>{this.curriculums=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  postCurriculum()
  {
    this._service.postCurriculum(this.curriculum).subscribe({
      next:(data)=>{this.curriculums=data},
      error:(err)=>{this.errMessage=err}
      })
    alert('Thêm thành công');
    this.goBack();
  }
  
  goBack() {
    this.router.navigate(['curriculum']);
  }
}
