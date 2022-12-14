import { Injectable } from '@angular/core';
import { Movies } from '../interface/movies';
import { Favourites } from '../interface/favourites';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {

  movies: Movies[] = [];
  users: User[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  getFilm(){
    return this.http.get<Movies[]>('http://localhost:4201/movies-popular')
  }

  getFavourites() {
    return this.http.get<Favourites[]>("http://localhost:4201/favorites?userId=" + this.auth.getUserId())
  }

  addFavourite(movie:Movies){
    let data = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      userId: this.auth.getUserId()
    }
    return this.http.post<Favourites>("http://localhost:4201/favorites", data)
  }

  removeFavourite(id:number){
    return this.http.delete("http://localhost:4201/favorites/" + id)
  }

}
