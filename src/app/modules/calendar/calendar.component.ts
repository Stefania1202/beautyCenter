import {
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Salon } from 'src/app/components/salon/salon-detail/salon.model';
import { Params, ActivatedRoute } from '@angular/router';
import { PostService } from '../posts/post.service';
import { SalonService } from 'src/app/components/salon/salon-detail/salon.service';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  implements OnInit {
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
