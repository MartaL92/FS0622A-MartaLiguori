import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { PhotoCard } from './interfaces/photo-card';
import { PhotosService } from './service/photos.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HTTP';

  constructor(private http: HttpClient, private photoSrv: PhotosService) { }

  ngOnInit(): void {
  }

}
