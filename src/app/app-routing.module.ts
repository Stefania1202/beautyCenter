import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MapComponent } from './modules/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { SalonComponent } from './components/salon/salon.component';
import { BookingComponent } from './components/booking/booking.component';
import { ProfileComponent } from './authenticate/profile/profile.component';
import { AuthComponent } from './authenticate/auth/auth.component';
import { AdminComponent } from './authenticate/admin/admin.component';
import { PostEditComponent } from './modules/posts/post-edit/post-edit.component';
import { PostStartComponent } from './modules/posts/post-start/post-start.component';
import { PostDetailComponent } from './modules/posts/post-detail/post-detail.component';
import { SalonsComponent } from './modules/salons/salons.component';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { SalonDetailComponent } from './components/salon/salon-detail/salon-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'salon', component: SalonComponent
  // , children: [
  //   { path: ':id', component: SalonDetailComponent },
  // ]
  },
  { path: 'salon/:id', component: SalonDetailComponent },
  {path: 'booking', component: BookingComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent },
  {path: '', component: DefaultComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'posts', component: PostsComponent
    , children: [
      { path: '', component: PostStartComponent },
      { path: 'new', component: PostEditComponent },
      { path: ':id', component: PostDetailComponent },
      { path: ':id/edit', component: PostEditComponent }
    ]
  },
    {path: 'map', component: MapComponent},
    {path: 'salons', component: SalonsComponent},
    {path: 'calendar', component: CalendarComponent}

  // , {
  //   path: 'posts/post-edit',
  //   component: PostEditComponent
  // }
]
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
