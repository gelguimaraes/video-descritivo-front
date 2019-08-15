import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import {map} from 'rxjs/operators';

import {Video} from '../model/video';
import {ConfigService} from './config.service';

@Injectable()
export class VideoService {

  private baseUrlService: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http,
              private configService: ConfigService) {

    /** SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
    this.baseUrlService = configService.getUrlService() + '/video/';

    /*ADICIONANDO O JSON NO HEADER */
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  /** CONSULTA TODOS OS VIDEOS CADASTRADOS */
  getVideos() {
    return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
  }

  /** ADICIONA UMA NOVO VIDEO */
  addVideo(video: Video) {

    return this.http.post(this.baseUrlService, JSON.stringify(video), this.options)
      .pipe(map(res => res.json()));
  }
  /** EXCLUI UM VIDEO */
  excluirVideo(id: number) {
    return this.http.delete(this.baseUrlService + id).pipe(map(res => res.json()));
  }

  /** CONSULTA UM VIDEO PELO ID */
  getVideo(id: number) {

    return this.http.get(this.baseUrlService + id).pipe(map(res => res.json()));
  }

  /** ATUALIZA INFORMAÇÕES DA PESSOA */
  atualizarVideo(video: Video) {
    return this.http.put(this.baseUrlService, JSON.stringify(video), this.options).pipe(map(res => res.json()));
  }
}
