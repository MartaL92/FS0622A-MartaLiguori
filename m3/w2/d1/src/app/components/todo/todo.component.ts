import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  constructor() { }

  datas: Todo[] = [];

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos').then((res)=> res.json()).then((res) => {
      this.datas = res;
      console.log(res)
    })
  }
}


//constructor( privateTodoService ) { }

//ngOnInit(): void {
    //this.Todoservice.getTodo.then


