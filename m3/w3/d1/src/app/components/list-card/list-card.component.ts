import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoCard } from 'src/app/interfaces/photo-card';
import { PhotosService } from 'src/app/service/photos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  sub!: Subscription;

  photos: PhotoCard[] = [];

  constructor(private http: HttpClient, private photoSrv: PhotosService) { }

  ngOnInit(): void {
    this.stampaFoto();
  }

  stampaFoto() {
    this.sub = this.photoSrv.getPhoto().subscribe((res) => {
      this.photos = res;
    })
  }
}

