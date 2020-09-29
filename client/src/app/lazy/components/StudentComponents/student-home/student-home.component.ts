import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
interface clas{
  subject: string;
  subject_code: string;
}

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  className = 'N1';
  code;

  constructor(private back:StudentService) { }
  classList:clas[] = [];
  ngOnInit(): void {
    this.getClasses();
  }
  join() {
    this.back.joinClass(this.code)
      .subscribe(res => {
        this.code = '';
        this.getClasses();
      }, err => {

      })

  }
  getClasses(){
    this.back.getClassList()
      .subscribe(res => {
        this.classList = res.classes;
    })
  }
}
