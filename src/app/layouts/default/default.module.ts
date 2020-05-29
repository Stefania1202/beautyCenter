import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
        MatSidenavModule,
        MatDividerModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule
       } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { PostEditComponent } from 'src/app/modules/posts/post-edit/post-edit.component';
import { PostDetailComponent } from 'src/app/modules/posts/post-detail/post-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MapComponent } from 'src/app/modules/map/map.component';
import { PostService } from 'src/app/modules/posts/post.service';
import { PostListComponent } from 'src/app/modules/posts/post-list/post-list.component';
import { PostItemComponent } from 'src/app/modules/posts/post-list/post-item/post-item.component';
import { PostStartComponent } from 'src/app/modules/posts/post-start/post-start.component';
import { SalonEditComponent } from 'src/app/modules/salons/salon-edit/salon-edit.component';
import { SalonsComponent } from 'src/app/modules/salons/salons.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PostEditComponent,
    PostDetailComponent,
    PostListComponent,
    PostItemComponent,
    PostStartComponent,
    MapComponent,
    SalonsComponent,
    SalonEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvQ71kUw9POGSLY63reLDopsHR4nWFkwo',
      libraries: ['places']
    })
  ],
  providers: [
    DashboardService,
    PostService
  ]
})
export class DefaultModule { }
