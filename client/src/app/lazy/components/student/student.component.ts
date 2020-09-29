import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import Peer from 'peerjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit, AfterViewInit {
  private peer;
  elem;
  time = 90;
  hour;
  minute = 60;
  seconds = 60;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.peer = new Peer({
      host: 'localhost',
      port: 443,
    });
  }
  @ViewChild('myvideo') input1: any;
  @ViewChild('wind') wind: any;
  id;
  msg;
  ngAfterViewInit() {}
  ngOnInit(): void {
    this.elem = document.documentElement;

    this.minute = 60;
    this.hour = Math.floor(this.time / 60);
    this.minute = (this.time % 60)-1;

    Promise.all([
      setInterval((t) => {

        this.seconds--;
        if (this.seconds == 0) {
          this.seconds = 60;
          this.minute--;
          if (this.minute == 0) {
            this.hour--;
          }
        }

      },1000)
    ]).then(() => {
      console.log('yo');
    });
    let video;
    setTimeout(() => {
      video = this.input1.nativeElement;
    }, 100);
    navigator.getUserMedia(
      { audio: true, video: true },
      (stream1) => {
        video.srcObject = stream1;
        video.play();

      },
      (err) => {}
    );

    this.peer.on('call', function (call) {
      // Answer the call, providing our mediaStream

      navigator.getUserMedia(
        { audio: true, video: true },
        (stream1) => {

          call.answer(stream1);
          call.on('stream', function (stream) {

          });
        },
        (err) => {}
      );
    });

    this.peer.on('open', (id) => {
      this.id = id;
    });
    this.peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        this.msg = data;
      });

      conn.send('yo bro');
    });
  }
  toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen ;
    var cancelFullScreen = doc.exitFullscreen

    if(!doc.fullscreenElement ) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  keypresevent(event) {
    console.log('uot');
  }
}
