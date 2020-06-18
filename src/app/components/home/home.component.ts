import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/modules/posts/post.service';
import { Post } from 'src/app/modules/posts/post.model';
import { DataStorageService } from 'src/app/modules/posts/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchText;
  posts: Post[];

  constructor(private http: HttpClient, private postService: PostService, private dataStoreService: DataStorageService) { }




  onCreateBooking(postData: {salonName: string; date: Date; nameClient: string; email: string; phone: string}) {
    this.http.post('https://proiectfinal-b9af1.firebaseio.com/booking.json',
    postData
    ).
    subscribe( responseData => {
      console.log(responseData);
    });
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }


}
