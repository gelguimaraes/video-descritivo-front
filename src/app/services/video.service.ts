import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Video} from '../model/video';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';

@Injectable()
export class VideoService {

  private baseUrlService: string;
  videoObserver = new Observable<Video>();
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrlService = configService.getUrlService() + '/videos/';
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrlService);
  }

  getVideo(id: number): Observable<Video> {
   // console.log(this.baseUrlService + id)
    return this.http.get<Video>(this.baseUrlService + id);
  }

  atualizarVideo(video: Video) {
    return this.http.put(this.baseUrlService, JSON.stringify(video));
  }
}
