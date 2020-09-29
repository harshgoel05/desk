import { Component, OnInit, SimpleChange, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core';
import { WebrtcService } from '../webrtc.service';
import Peer from 'peerjs';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private web: WebrtcService) {
    this.peer = new Peer({
      host: 'localhost',
      port: 443,
    })
   }
  private peer;
  id;
  @ViewChild('myvideo') myvid;

  ngOnInit(): void {
  
  }

  receive(key) {
    setTimeout(() => {
      vid = this.myvid.nativeElement;
    }, 100);
    let vid;
    let stream = null;
    navigator.mediaDevices.getUserMedia({ video: {} }).then((stream) => {
      let call = this.peer.call(key, stream)
      call.on('stream', (stream) => {
        console.log(stream)
        vid.srcObject = stream;
        vid.play();
    })
    }, (err) => console.error(err))
    
    const conn = this.peer.connect(key);
      conn.on('open', () => {
        conn.on('data', (data) => {
          console.log(data);
          
        })
        conn.send('hi there');
       
        
    });
    
  }
}
