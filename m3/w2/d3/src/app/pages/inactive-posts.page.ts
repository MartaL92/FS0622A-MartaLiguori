import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { getPosts, updatePosts } from '../posts.service';

@Component({
  template: `
      <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-card [post]="post" *ngIf="!post.active">
        <button (click)="onInactivePost(post.id, i)" class="btn btn-primary">Attiva</button>
        </app-card>
      </div>
      </div>
  `,
  styles: [
  ]
})
export class InactivePostsPage implements OnInit {

  posts!: Post[];

  constructor() {
    getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {
  }

  onInactivePost(id: number, i:number){
    updatePosts({'active': false}, id);
    this.posts.splice(i, 1);
  }

}
