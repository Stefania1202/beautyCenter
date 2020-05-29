import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AdminService, AdminResponseData } from './admin.service';
import { User } from '../admin/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

 export class AdminComponent {
  isLoginMode = true;
  error: string = null;

  constructor(private authService: AdminService, private router: Router) {}


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AdminResponseData>;



    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['/posts']);

      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;

      }
    );

    form.reset();
  }
}

