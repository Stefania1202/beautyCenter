import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/authenticate/admin/admin.service';
import { DataStorageService } from 'src/app/modules/posts/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAdmin = false;
  private userSub: Subscription;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private adminService: AdminService, private dataStorageService: DataStorageService) { }

  onSaveData() {
    this.dataStorageService.storePosts();
  }

  onFetchData() {
    this.dataStorageService.fetchPosts();
  }


  ngOnInit() {
    this.userSub = this.adminService.user.subscribe( user => {
      this.isAdmin = !!user;
      console.log(!user);
      console.log(!!user);
    });
    // this.dataStorageService.fetchPosts();

   }

   onLogout() {
    this.adminService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
