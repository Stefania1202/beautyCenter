import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

export class PostService {
  postChanged = new Subject<Post[]>();
  postSelected = new EventEmitter<Post>();
  private posts: Post[] = [];

      setPosts(posts: Post[]) {
        this.posts = posts;
        this.postChanged.next(this.posts.slice());
      }

      getPosts() {
        return this.posts.slice();
      }

      getPost(index: number) {
        return this.posts[index];
      }

      addPost(post: Post) {
        this.posts.push(post);
        this.postChanged.next(this.posts.slice());
      }

      updatePost(index: number, newPost: Post) {
        this.posts[index] = newPost;
        this.postChanged.next(this.posts.slice());
      }

      deletePost(index: number) {
        this.posts.splice(index, 1);
        this.postChanged.next(this.posts.slice());
      }
}

