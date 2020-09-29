import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  login;

  ngOnInit(): void {
    this.login = !!localStorage.getItem('token');

// Scrolling Effect
  }
  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

}
