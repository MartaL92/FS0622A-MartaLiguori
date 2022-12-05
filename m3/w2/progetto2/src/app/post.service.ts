import { Injectable } from '@angular/core';
import { Post } from './post';
import { Users } from './users';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts:Post[] = []
  private users:Users[]=[]

  constructor() { }

  fetchData() {
    fetch("http://localhost:3000/posts").then(res=>res.json()).then(res=>{
      this.posts = res
    })
  }

  getPostsFiltrati(a:boolean) {
    return this.posts.filter(p=>p.active==a)
  }

  private toggleServicePost(id:number) {
    console.log("toggle", id);
    this.posts = this.posts.map((e)=>{
      if(e.id == id) {
        console.log(e, e.active);
        e.active = !e.active
      }
      return e
    })
    console.log(this.posts);
  }

  togglePost(id:number) {
    let postDiArray = this.posts.find(p=>p.id==id)
    let postClone = {...postDiArray}
    if(postDiArray == undefined) {
      throw new Error("Elemento non trovato")
    }
    postClone.active = !postClone.active
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postClone)
    }).then((res)=>{
      if(res.ok) {
        this.toggleServicePost(id)
      } else {
        console.log("err");
      }
      return res
    })
  }

  deletePost(id:number) {
    return fetch("http://localhost:3000/posts/"+id, {
      method:"DELETE"
    }).then(res=>{
      if(res.ok) {
        this.deleteService(id)
      }
      return res
    })
  }

  private deleteService(id:number) {
    this.posts = this.posts.filter(e=>e.id != id)
  }

  fetchUser(id:number){
    let f=fetch("http://localhost:3000/users/"+id,
    )
    let t=f.then(res=>{
      return res.json()
    })
    return t
  }

  fetchPost(id:number){
    let fe=fetch("http://localhost:3000/posts/"+id,
    )
    let s=fe.then(res=>{
      return res.json()
    })
    return s
  }
}
