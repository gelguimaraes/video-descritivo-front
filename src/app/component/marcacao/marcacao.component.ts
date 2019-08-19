import { Component, OnInit } from '@angular/core';
import {Video} from '../../model/video';
import {VideoService} from '../../services/video.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-marcacao',
  templateUrl: './marcacao.component.html',
  styleUrls: ['./marcacao.component.css']
})
export class MarcacaoComponent implements OnInit {

  videoObs: Observable<Video>;
  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let idVideo = +params.id;
        if (idVideo  === 0 || isNaN(idVideo)) {
          idVideo = 1;
        }
        this.videoObs = this.videoService.getVideo(idVideo);
      }
    );
  }
}
