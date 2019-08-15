import {Component, OnInit} from '@angular/core';
import {Video} from './model/video';
import {VideoService} from './services/video.service';
import {Pipe, PipeTransform} from '@angular/core';
import {Observable, pipe} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'video-descritivo';
  vid: HTMLVideoElement;
  videos: Observable<Video[]>;


  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.vid = document.getElementById('myVideo').parentElement as HTMLVideoElement;
    this.videos = this.videoService.getVideos();
  }

  getCurTime() {
    alert(this.vid.currentTime);
  }

  setCurTime() {
    this.vid.currentTime = 5;
  }
}
