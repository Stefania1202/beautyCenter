import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostService } from './post.service';
import { Post } from './post.model';



@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private postService: PostService) {}

    storePosts() {
        const posts = this.postService.getPosts();
        this.http.put('https://proiectfinal-b9af1.firebaseio.com/post.json', posts).subscribe( response => {
            console.log(response);
        });
    }

    fetchPosts() {
        this.http.get<Post[]>('https://proiectfinal-b9af1.firebaseio.com/post.json').subscribe(posts =>{
            this.postService.setPosts(posts);
        })
    }
}
