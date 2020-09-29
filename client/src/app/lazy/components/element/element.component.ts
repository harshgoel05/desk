import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor() { }
  @Input() type;
  @Input() id;
  @Input() value;
  @Input() disable;
  @Output() onvalue: EventEmitter<any> = new EventEmitter<any>();
  favoriteSeason: string;
  field_value;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  event1(event) {
    console.log(event.target.value);
  }


  ngOnInit(): void {

  }

  change($event) {
    console.log(this.field_value);
    this.onvalue.emit(this.field_value);

}
}
