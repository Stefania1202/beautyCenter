import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post.model';
import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  selectedPost: Post;

  constructor(private postService: PostService, private dataStoreService: DataStorageService) { }

  ngOnInit() {
    this.postService.postSelected
      .subscribe(
        (post: Post) => {
          this.selectedPost = post;
        }
      );
    this.dataStoreService.fetchPosts();
    
  }

}
