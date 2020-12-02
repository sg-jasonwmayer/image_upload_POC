import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef | undefined; files  = [];
  constructor(private uploadService: UploadService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

