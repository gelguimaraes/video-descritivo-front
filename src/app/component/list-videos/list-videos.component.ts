import { Component, OnInit } from '@angular/core';
import {Video} from '../../model/video';
import {Observable} from 'rxjs';
import {VideoService} from '../../services/video.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoComponent} from '../video/video.component';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {
  videos: Observable<Video[]>;
  videoElement: HTMLVideoElement;
  step = 0;
  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    this.setStep(1);
  }
  onSelect(video) {
    this.router.navigate(['/videos', video.id]);
  }

  setStep(index: number) {
    this.step = index;
  }
  getCurTime(idVideo) {
    this.videoElement = document.getElementById('video_' + idVideo) as HTMLVideoElement;
    return this.videoElement.currentTime;
  }
  setCurTime(idVideo, idMarcacao, timeInicial, timeFinal, currentTime) {
    this.videoElement = document.getElementById('video_' + idVideo) as HTMLVideoElement;
    this.videoElement.currentTime = timeInicial;
    const box = document.getElementsByClassName('boxMarcacao');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < box.length; i++) {
      // @ts-ignore
      box[i].style.display = 'none';
    }
    document.getElementById('marcacao_' + idMarcacao).style.display = 'block';
  }
}
