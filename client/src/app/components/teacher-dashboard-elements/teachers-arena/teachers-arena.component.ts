import { Component, OnInit } from '@angular/core';
import { TeacherdashService } from '../teacherdash.service';

@Component({
  selector: 'app-teachers-arena',
  templateUrl: './teachers-arena.component.html',
  styleUrls: ['./teachers-arena.component.css']
})
export class TeachersArenaComponent implements OnInit {

  constructor(private back:TeacherdashService) { }
  classList = [];
  ngOnInit(): void {

  }

}
