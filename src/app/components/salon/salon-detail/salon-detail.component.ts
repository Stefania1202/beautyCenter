import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/modules/posts/post.model';
import { PostService } from 'src/app/modules/posts/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Salon } from 'src/app/components/salon/salon-detail/salon.model';
import { SalonService } from 'src/app/components/salon/salon-detail/salon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.css']
})
export class SalonDetailComponent implements OnInit {
  post: Post;
  id: number;
  posts: Post[];
  loadedSalon: Salon[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;



  constructor(private postService: PostService,
              private route: ActivatedRoute, private salonService: SalonService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.post = this.postService.getPost(this.id);
        }
      );
    this.errorSub = this.salonService.error.subscribe(errorMessage => {
        this.error = errorMessage;
      });

    this.isFetching = true;
    this.salonService.fetchEvent().subscribe(
        posts => {
          this.isFetching = false;
          this.loadedSalon = posts;
        },
        error => {
          this.isFetching = false;
          this.error = error.message;
        }
      );
  }


onCreateEvent(postData: Salon) {
  this.salonService.SaveEvent( postData.place, postData.start, postData.time, postData.service, postData.city );
}

  onFetchEvent() {
    this.isFetching = true;
    this.salonService.fetchEvent().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedSalon = posts;
      },
    error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    }
    );
  }
}
