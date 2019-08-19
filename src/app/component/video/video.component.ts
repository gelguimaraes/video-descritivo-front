import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {ActivatedRoute} from '@angular/router';
import {Video} from '../../model/video';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  // @ts-ignore
  videoElement: HTMLVideoElement;
  videoObs: Observable<Video>;
  video: Video;
  currentTime: number;
  teponInicial: number;
  tempoFinal: number;
  divMarcacao: HTMLDivElement;

  constructor(private videoService: VideoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let idVideo = +params.id;
        if (idVideo === 0 || isNaN(idVideo)) {
          idVideo = 1;
        }
        this.videoService.getVideo(idVideo).toPromise().then(value => {
          this.video = value;
        });
      }
    );
  }

  setCurrentTime(time, id) {
    this.currentTime = time.target.currentTime;
  }
}

