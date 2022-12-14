import { Injectable } from '@angular/core';
import { Movies } from '../interface/movies';
import { Favourites } from '../interface/favourites';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {

  movies: Movies[] = [];
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getFilm(){
    return this.http.get<Movies[]>('http://localhost:4201/movies-popular')
  }

  getFavourites() {
    return this.http.get<Favourites[]>("http://localhost:4201/favorites")
  }

  addFavourite(movie: {id: number, title: string, poster_path: string, userId: any} ){
    return this.http.post<Favourites>("http://localhost:4201/favorites", movie)
  }

  removeFavourite(id:number){
    return this.http.delete("http://localhost:4201/favorites/" + id)
  }

}
