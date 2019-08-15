import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {ConfigService} from './services/config.service';
import {VideoService} from './services/video.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatVideoModule,
    HttpModule,
  ],
  providers: [ConfigService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
