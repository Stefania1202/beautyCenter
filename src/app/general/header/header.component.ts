import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/authenticate/auth/auth.service';
import { AdminService } from 'src/app/authenticate/admin/admin.service';
import { DataStorageService } from 'src/app/components/salon/data-storage.service';

@Component({
  selector: 'app-general-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  isAuthenticated = false;
  isAdmin = false;
  private userSub: Subscription;

  constructor(private authService: AuthService, private adminService: AdminService, private dataStorageServices: DataStorageService) { }


  onSaveData() {
    this.dataStorageServices.storageSalon();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });

    this.userSub = this.adminService.user.subscribe( user => {
      this.isAdmin = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onLogout() {
    this.authService.logout();
    this.adminService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
