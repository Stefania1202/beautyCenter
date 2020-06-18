import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Salons } from './salons.model';
import { SalonsService } from './salons.service';
import { Post } from 'src/app/modules/posts/post.model';
import { PostService } from '../../modules/posts/post.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor( private http: HttpClient, private salonsService: SalonsService,private postService: PostService ) {}

    storageSalon() {
        const salon = this.salonsService.getSalons();
        this.http.put(
            'https://proiectfinal-b9af1.firebaseio.com/salon.json',
             salon
            )
            .subscribe( response => {
            console.log(response);
        });
    }
    fetchPosts() {
        this.http.get<Post[]>('https://proiectfinal-b9af1.firebaseio.com/post.json').subscribe(posts =>{
            this.postService.setPosts(posts);
        });
    }
}
