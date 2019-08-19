import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Video} from '../model/video';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class VideoService {

  private baseUrlService: string;
  videoObserver = new Observable<Video>();
  videosCol: AngularFirestoreCollection<Video>;
  constructor(private http: HttpClient, private configService: ConfigService, private afs: AngularFirestore) {
    this.baseUrlService = configService.getUrlService() + '/videos/';
    this.videosCol = afs.collection('videos');
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrlService);
    //console.log(this.videosCol.valueChanges().subscribe(val => console.log(val)))
    //return this.videosCol.valueChanges();
  }

  getVideo(id: number): Observable<Video> {
   // console.log(this.baseUrlService + id)
   return this.http.get<Video>(this.baseUrlService + id);
  }

  atualizarVideo(video: Video) {
    return this.http.put(this.baseUrlService, JSON.stringify(video));
  }
}
