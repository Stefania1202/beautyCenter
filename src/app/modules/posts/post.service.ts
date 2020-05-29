import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';
import { Salon } from '../salons/salon.model';

export class PostService {
  postChanged = new Subject<Post[]>();
  postSelected = new EventEmitter<Post>();

    // private posts: Post[] = [
    // tslint:disable-next-line: max-line-length
    //     new Post ('A test post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    //     'https://beuhairsalon.com/wp-content/uploads/2017/09/beuhair-interior-3-min-cropped.jpg'),
    //   ];
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

