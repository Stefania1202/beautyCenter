import { Component, OnInit } from '@angular/core';

// import { Salons } from '../salons.model';
// import { SalonsService } from '../salons.service';
import { PostService } from 'src/app/modules/posts/post.service';
import { Post } from 'src/app/modules/posts/post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from 'src/app/modules/posts/data-storage.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute,
              private dataStoreService: DataStorageService, private http: HttpClient) { }

  ngOnInit() {
    this.postService.postChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.posts = this.postService.getPosts();
  }

  onCreateBooking(postData: {salonName: string; date: Date; nameClient: string; email: string; phone: string}) {
    this.http.post('https://proiectfinal-b9af1.firebaseio.com/booking.json',
    postData
    ).
    subscribe( responseData => {
      console.log(responseData);
    });
  }

  onCreateComment(post: {firstname: string; lastname: string; mobile: string; email: string; message: string}) {
    this.http.post('https://proiectfinal-b9af1.firebaseio.com/comment.json',
    post
    ).
    subscribe( response => {
      console.log(response);
    });
  }

}
