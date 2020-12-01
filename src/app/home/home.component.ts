import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UploadService } from  '../upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @ViewChild('fileUpload', { static: false })
  fileUpload!: ElementRef; files  = [];
    constructor(private uploadService: UploadService) { }  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  uploadFile(file: { data: string | Blob; inProgress: boolean; progress: number; }) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }
  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
}
onClick() {
  const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
  for (let index = 0; index < fileUpload.files.length; index++)
  {
   const file = fileUpload.files[index];
   this.files.push({ data: file, inProgress: false, progress: 0});
  }
  this.uploadFiles();
  };
  fileUpload.click();
}
}
