import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatList } from '@angular/material';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
  CdkDragStart,
  CdkDragMove,
} from '@angular/cdk/drag-drop';

interface element {
  id: number;
  type: string;
  value?: string;
  quesid?: number;
}

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css'],
})
export class CreatequizComponent implements OnInit {
  @ViewChild(MatList, { read: ElementRef }) child: ElementRef;
  constructor() {}

  _currentIndex;
  _currentField;
  fields: element[] = [];
  ngOnInit(): void {}
  ques = [];
  short_ans = [
    { id: 1, type: 'short_answer', value: 'long answer' },
    { id: 1, type: 'short_answer', value: 'short answer' },
    { id: 1, type: 'short_answer', value: 'short answer' },
  ];
  drop_list: element[] = [
    { id: 1, type: 'question', value: 'short answer' },

  ];
  additem(elemenr: element) {
    console.log('added');
    this.drop_list.push(elemenr);
  }
  drop(event: CdkDragDrop<element[]>) {
    console.log('dropperd');
    if (event.previousContainer === event.container) {
      console.log('dropperd');
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.container.data);
      this.drop_list = event.container.data;
    } else {
      this.addField(event.item.data, event.currentIndex);
    }
  }
  dragStart(event: CdkDragStart) {
    this._currentIndex = this.short_ans.indexOf(event.source.data); // Get index of dragged type
    this._currentField = this.child.nativeElement.children[this._currentIndex]; // Store HTML field
  }
  moved(event: CdkDragMove) {
    // Check if stored HTML field is as same as current field
    if (
      this.child.nativeElement.children[this._currentIndex] !==
      this._currentField
    ) {
      // Replace current field, basically replaces placeholder with old HTML content
      this.child.nativeElement.replaceChild(
        this._currentField,
        this.child.nativeElement.children[this._currentIndex]
      );
    }
  }
  addField(fieldType: element, index: number) {
    this.fields.splice(index, 0, fieldType);
  }

  build() {
    let i = -1;
    let buildList = this.drop_list.map((item) => {
      if (item.type === 'question') {
        i++;
      } else {
        item.quesid = i;
      }
      return item;
    });
    console.log(buildList);
  }
  getData(event,i) {
    this.drop_list[i].value = event;

  }
}
