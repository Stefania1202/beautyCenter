import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PostService } from '../post.service';
import { DataStorageService } from '../data-storage.service';



@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  id: number;
  editMode = false;

  postForm: FormGroup;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newPost = new Post(
    //   this.postForm.value['name'],
    //   this.postForm.value['description'],
    //   this.postForm.value['imagePath']);
    if (this.editMode) {
      this.postService.updatePost(this.id, this.postForm.value);
    } else {
      this.postService.addPost(this.postForm.value);
    }
    this.onCancel();
    
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  get controls() { // a getter!
    return (<FormArray>this.postForm.get('salon')).controls;
  }



  private initForm() {
    let postName = '';
    let postImagePath = '';
    let postDescription = '';
    let postSalon = new FormArray ([]);

    if (this.editMode) {
      const post = this.postService.getPost(this.id);
      postName = post.name;
      postImagePath = post.imagePath;
      postDescription = post.description;
      if (post['salon']) {
        for (let salon of post.salon) {
          postSalon.push(
            new FormGroup({
              'name': new FormControl(salon.name),
              'price': new FormControl(salon.price)
            })
          );
        }
      }
    }



    this.postForm = new FormGroup({
      'name': new FormControl(postName),
      'imagePath': new FormControl(postImagePath),
      'description': new FormControl(postDescription),
      'salon': postSalon
    });
  }


}
