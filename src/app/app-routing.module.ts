import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VideoComponent} from './component/video/video.component';
import {ListVideosComponent} from './component/list-videos/list-videos.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '',  redirectTo: 'videos/', pathMatch: 'prefix' },
      {path: 'videos', component: VideoComponent},
      {path: 'videos/:id', component: VideoComponent},
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

