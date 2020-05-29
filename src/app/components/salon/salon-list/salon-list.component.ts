import { Component, OnInit } from '@angular/core';

// import { Salons } from '../salons.model';
// import { SalonsService } from '../salons.service';
import { PostService } from 'src/app/modules/posts/post.service';
import { Post } from 'src/app/modules/posts/post.model';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {

  // salon: Salons[];
  posts: Post[];

  constructor( private postService: PostService) { }

  ngOnInit() {
    // this.salon = this.salonsService.getSalons();
    this.posts = this.postService.getPosts();
  }

}
