import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modules/posts/post.model';
import { PostService } from 'src/app/modules/posts/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/modules/posts/data-storage.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent  {
  
}
