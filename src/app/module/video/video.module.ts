import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from '../../component/video/video.component';
import {VideoService} from '../../services/video.service';
import {EnqueteComponent} from '../../component/enquete/enquete.component';
import {ListVideosComponent} from '../../component/list-videos/list-videos.component';
import {AppRoutingModule} from '../../app-routing.module';
import {MatExpansionModule} from '@angular/material';
import {MarcacaoComponent} from '../../component/marcacao/marcacao.component';
@NgModule({
  providers: [VideoService, VideoComponent],
  declarations: [
    VideoComponent,
    EnqueteComponent,
    MarcacaoComponent,
    ListVideosComponent],
  exports: [
    ListVideosComponent,
    VideoComponent,
    MarcacaoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatExpansionModule
  ]
})
export class VideoModule {
}
