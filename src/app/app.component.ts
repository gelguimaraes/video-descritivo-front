import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'video-descritivo';
  vid: HTMLVideoElement;

  ngOnInit() {
    this.vid = document.getElementById('myVideo').parentElement as HTMLVideoElement;
  }

  getCurTime() {
    alert(this.vid.currentTime);
  }

  setCurTime() {
    this.vid.currentTime = 5;
  }
}
