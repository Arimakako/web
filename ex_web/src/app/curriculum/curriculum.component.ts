import { Component } from '@angular/core';
import { CurriculumService } from '../curriculum.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  curriculums:any;
  errMessage:string=''
  constructor(private _service: CurriculumService, private router: Router, private activateRoute: ActivatedRoute){
  this._service.getCurriculums().subscribe({
  next:(data)=>{this.curriculums=data},
  error:(err)=>{this.errMessage=err}
    })
  }
  deleteCurriculum(Id: any) {
    if (window.confirm('Xác nhận xóa giáo trình này?')) {
      this._service.deleteCurriculum(Id).subscribe({
        next:(data)=>{this.curriculums=data},
        error:(err)=>{this.errMessage=err}
      })
    };
  }
}
