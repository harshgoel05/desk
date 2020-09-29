import { Component, OnInit } from '@angular/core';

interface test {
  name: string;
  totalMarks: number;
  time: string;
 }

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {

  constructor() { }
  test: test;
  ngOnInit(): void {
  }

}
