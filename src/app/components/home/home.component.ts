import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // bookingForm: FormGroup;

  constructor(private http: HttpClient) { }


  onCreateBooking(postData: {salonName: string; date: Date; nameClient: string; email: string; phone: string}) {
    this.http.post('https://proiectfinal-b9af1.firebaseio.com/booking.json',
    postData
    ).
    subscribe( responseData => {
      console.log(responseData);
    });
  }

  private fetchBooking() {
    this.http.get('https://proiectfinal-b9af1.firebaseio.com/booking.json');
  }

  // onSubmit() {
  //   console.log(this.bookingForm);
  // }

}
