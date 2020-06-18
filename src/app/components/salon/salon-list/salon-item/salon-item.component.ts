import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/modules/posts/post.model';

@Component({
  selector: 'app-salon-item',
  templateUrl: './salon-item.component.html',
  styleUrls: ['./salon-item.component.css']
})
export class SalonItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number ;

  ngOnInit() {
  }

}
