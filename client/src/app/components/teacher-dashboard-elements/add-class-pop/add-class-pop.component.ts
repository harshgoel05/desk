import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-class-pop',
  templateUrl: './add-class-pop.component.html',
  styleUrls: ['./add-class-pop.component.css']
})
export class AddClassPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClassPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
