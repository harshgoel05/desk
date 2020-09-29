import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { TeacherdashService } from '../teacherdash.service';


import * as $ from 'jquery';
import { AddClassPopComponent } from '../add-class-pop/add-class-pop.component';

interface classes {
  subject: string;
  subject_code: string;
  code: string,
  meeting: { link: string },
  students:[string]
 }


@Component({
  selector: 'app-teacher-classes',
  templateUrl: './teacher-classes.component.html',
  styleUrls: ['./teacher-classes.component.css']
})
export class TeacherClassesComponent implements OnInit {
  panelOpenState = false;
  className = 'N1';

  constructor(private back: TeacherdashService, private dialog:MatDialog) { }
  classList: classes[];
  ngOnInit(): void {
    this.back.getClasslist()
    .subscribe(res => {
      this.classList = res.classes;
    })

  }
  openDialog() {
    this.dialog.open(AddClassPopComponent);
  }
  deleteclass(code) {
    this.back.deleteClass(code)
      .subscribe(res => {
        this.back.getClasslist()
        .subscribe(res => {
          this.classList = res.classes;
        })
    })
  }


}

