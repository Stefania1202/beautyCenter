import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }
  // constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.postService.postChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.posts = this.postService.getPosts();
  }

  onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
