import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SalonComponent } from './salon/salon.component';
import { SalonListComponent } from './Salon/salon-list/salon-list.component';
import { SalonItemComponent } from './Salon/salon-list/salon-item/salon-item.component';
import { SalonDetailComponent } from './Salon/salon-detail/salon-detail.component';
import { BookingComponent } from './booking/booking.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SalonComponent,
    SalonListComponent,
    SalonItemComponent,
    SalonDetailComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
