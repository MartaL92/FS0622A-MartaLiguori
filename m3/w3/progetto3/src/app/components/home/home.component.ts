import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favourites } from 'src/app/interface/favourites';
import { Movies } from 'src/app/interface/movies';
import { NetflixService } from 'src/app/service/netflix.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movies[] = [];
  film!: Favourites;
  userId!: any;

  constructor(private http: HttpClient, private srv: NetflixService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.srv.getFilm().subscribe((res) => {
      this.movies = res;
    })
  }

  aggiungi(movie: Movies) {
    this.srv.addFavourite(movie).subscribe((res) => {
      this.film = res;
    })

  }
}
