import { Component, OnInit, Input} from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-card',
  template: `
    <div
    [ngClass]="{
        'bg-warning': post.type == 'news',
        'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic',
        'text-white': post.type == 'politic'
      }"
      class="card mb-4"
      >
      <h5 class="card-header">Post</h5>
      <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>

      <p class= "card-text">
      {{post.body}}
    </p>
    <ng-content></ng-content>
    </div>
    </div>
  `,
  styles: [
  ]
})

export class CardComponent implements OnInit {
  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
