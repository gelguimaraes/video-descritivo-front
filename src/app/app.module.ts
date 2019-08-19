import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './services/config.service';
import {VideoService} from './services/video.service';
import {VideoModule} from './module/video/video.module';
import {AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    VideoModule,
    AppRoutingModule
  ],
  providers: [ConfigService, VideoService, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
