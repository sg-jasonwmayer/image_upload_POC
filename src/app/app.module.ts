import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UploadComponent } from './upload/upload.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgxCameraModule } from 'ngx-camera';


@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      UploadComponent,
      FileUploadComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatProgressBarModule,
      NgxCameraModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
