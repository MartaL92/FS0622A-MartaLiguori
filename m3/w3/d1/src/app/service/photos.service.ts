import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoCard } from '../interfaces/photo-card';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  dataSubj = new Subject();
  dataObs = this.dataSubj.asObservable();

  photos: PhotoCard[] = [];

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<PhotoCard[]>('http://localhost:3000/photos');
    }
}
