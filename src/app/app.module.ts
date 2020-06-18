import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule,
  MatTabsModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import { AuthComponent } from './authenticate/auth/auth.component';
import { AdminComponent } from './authenticate/admin/admin.component';
import { ProfileComponent } from './authenticate/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { SalonComponent } from './components/salon/salon.component';
import { SalonDetailComponent } from './components/salon/salon-detail/salon-detail.component';
import { SalonListComponent } from './components/salon/salon-list/salon-list.component';
import { SalonItemComponent } from './components/salon/salon-list/salon-item/salon-item.component';
import { SalonsService } from './components/salon/salons.service';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { HomeItemComponent } from './components/home/home-list/home-item/home-item.component';
import { SearchPipe } from './components/salon/search.pipe';
// import { PostService } from './modules/posts/post.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    AdminComponent,
    ProfileComponent,
    HomeComponent,
    BookingComponent,
    SalonComponent,
    SalonDetailComponent,
    SalonListComponent,
    SalonItemComponent,
    CalendarComponent,
    HomeListComponent,
    HomeItemComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatAutocompleteModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'MyApp'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvQ71kUw9POGSLY63reLDopsHR4nWFkwo',
      libraries: ['places']
    })
  ],
  providers: [SalonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
