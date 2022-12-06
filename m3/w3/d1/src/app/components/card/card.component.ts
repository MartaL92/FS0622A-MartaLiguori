import { Component, Input, OnInit } from '@angular/core';
import { PhotoCard } from 'src/app/interfaces/photo-card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() photo!: PhotoCard;

  constructor() { }

  ngOnInit(): void {

  }

}
