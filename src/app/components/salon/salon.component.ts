import { Component, OnInit } from '@angular/core';
import { SalonsService } from './salons.service';
import { DataStorageService } from '../../modules/posts/data-storage.service';
import { Post } from 'src/app/modules/posts/post.model';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/modules/posts/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css'],
  providers: [SalonsService]
})
export class SalonComponent implements OnInit {
selectedPost: Post;

  constructor(private postService: PostService, private dataStoreService: DataStorageService, private router: Router) { }

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
