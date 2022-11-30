import { Component, OnInit } from '@angular/core';
import { assegnaPost } from './posts.service';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  constructor(){

  }

  ngOnInit(): void {
    assegnaPost();
  }
}
