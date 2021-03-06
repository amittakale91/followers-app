import { BadInputError } from './../common/bad-input-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from 'app/common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any[];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts );
  }

  createPost(input: HTMLInputElement){
    const post = { title : input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
    .subscribe(newPost => {
       post['id'] = newPost.id;
    },
    (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInputError){
        // this.form.setErrors(error.originalError);
      }else{
        console.log(error);
          throw error;
      }
    });
  }

  updatePost(post){
    post.title = 'My new title';
     this.service.update(post)
    .subscribe(Updatedpost => console.log(Updatedpost));
  }

  deletePost(post){
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(null,
    (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError){
         alert('This post is already been deleted');
      }else{
        throw error;
      }
    });
  }

}
