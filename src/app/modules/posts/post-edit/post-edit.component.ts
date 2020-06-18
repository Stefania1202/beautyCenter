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

  private initForm() {
    let postName = '';
    let postImagePath = '';
    let postlocation = ''; let postcity = '';
    let postDescription = '';
    // tslint:disable-next-line: max-line-length
    let postserviciul1 = ''; let postserviciul2 = ''; let postserviciul3 = ''; let postserviciul4 = ''; let postserviciul5 = ''; let postserviciul6 = '';
    // tslint:disable-next-line: max-line-length
    let postserviciul01 = ''; let postserviciul02 = ''; let postserviciul03 = ''; let postserviciul04 = ''; let postserviciul05 = ''; let postserviciul06 = '';
     // tslint:disable-next-line: max-line-length
    let postserviciul11 = ''; let postserviciul22 = ''; let postserviciul33 = ''; let postserviciul44 = ''; let postserviciul55 = ''; let postserviciul66 = '';
    let postpret1 = ''; let postpret2 = ''; let postpret3 = ''; let postpret4 = ''; let postpret5 = ''; let postpret6 = '';

    if (this.editMode) {
      const post = this.postService.getPost(this.id);
      postName = post.name;
      postImagePath = post.imagePath;
      postlocation = post.location; postcity = post.city;
      postDescription = post.description;
      // tslint:disable-next-line: max-line-length
      postserviciul1 = post.serviciul1; postserviciul2 = post.serviciul2; postserviciul3 = post.serviciul3; postserviciul4 = post.serviciul4; postserviciul5 = post.serviciul5; postserviciul6 = post.serviciul6;
      // tslint:disable-next-line: max-line-length
      postserviciul01 = post.serviciul01; postserviciul02 = post.serviciul02; postserviciul03 = post.serviciul03; postserviciul04 = post.serviciul04; postserviciul05 = post.serviciul05; postserviciul06 = post.serviciul06;
       // tslint:disable-next-line: max-line-length
      postserviciul11 = post.serviciul11; postserviciul22 = post.serviciul22; postserviciul33 = post.serviciul33; postserviciul44 = post.serviciul44; postserviciul55 = post.serviciul55; postserviciul66 = post.serviciul66;
      // tslint:disable-next-line: max-line-length
      postpret1 = post.pret1; postpret2 = post.pret2; postpret3 = post.pret3; postpret4 = post.pret4; postpret5 = post.pret6; postpret6 = post.pret6;

    }



    this.postForm = new FormGroup({
      'name': new FormControl(postName),
      'imagePath': new FormControl(postImagePath),
      'location': new FormControl(postlocation), 'city': new FormControl(postcity),
      'description': new FormControl(postDescription),
      // tslint:disable-next-line: max-line-length
      'serviciul1': new FormControl(postserviciul1), 'serviciul2': new FormControl(postserviciul2), 'serviciul3': new FormControl(postserviciul3), 'serviciul4': new FormControl(postserviciul4), 'serviciul5': new FormControl(postserviciul5), 'serviciul6': new FormControl(postserviciul6),
      // tslint:disable-next-line: max-line-length
      'serviciul01': new FormControl(postserviciul01), 'serviciul02': new FormControl(postserviciul02), 'serviciul03': new FormControl(postserviciul03), 'serviciul04': new FormControl(postserviciul04), 'serviciul05': new FormControl(postserviciul05), 'serviciul06': new FormControl(postserviciul06),
      // tslint:disable-next-line: max-line-length
      'serviciul11': new FormControl(postserviciul11), 'serviciul22': new FormControl(postserviciul22), 'serviciul33': new FormControl(postserviciul33), 'serviciul44': new FormControl(postserviciul44), 'serviciul55': new FormControl(postserviciul55), 'serviciul66': new FormControl(postserviciul66),
      // tslint:disable-next-line: max-line-length
      'pret1': new FormControl(postpret1), 'pret2': new FormControl(postpret2), 'pret3': new FormControl(postpret3), 'pret4': new FormControl(postpret4), 'pret5': new FormControl(postpret5), 'pret6': new FormControl(postpret6),
    });
  }


}
