import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Favourites } from 'src/app/interface/favourites';
import { Movies } from 'src/app/interface/movies';
import { User } from 'src/app/interface/user';
import { NetflixService } from 'src/app/service/netflix.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent implements OnInit {

  movies: Movies[] = [];
  film!: Movies;
  favourites: Favourites[] = [];
  id!:number;

  constructor(private http: HttpClient, private srv: NetflixService) { }

  ngOnInit(): void {
    this.getPreferiti();
  }

  getPreferiti() {
    this.srv.getFavourites().subscribe((res) => {
      this.favourites = res;
    })
  }

  elimina(id:number, index:number){
    this.srv.removeFavourite(id).subscribe((ris)=>{
      this.favourites?.splice(index, 1)
    })
  }
}
