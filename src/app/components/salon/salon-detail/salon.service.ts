import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Salon } from './salon.model';

@Injectable({ providedIn: 'root' })
export class SalonService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    SaveEvent(place: string, start: Date, time: string, service: string, city: string) {
      const postData: Salon = { place: place, start: start, time: time, service: service, city: city};
      this.http
        .post<{ name: string }>(
          'https://proiectfinal-b9af1.firebaseio.com//booking.json',
          postData,
          {
            observe: 'response'
          }
        )
        .subscribe(
          responseData => {
            console.log(responseData);
          },
          error => {
            this.error.next(error.message);
          }
        );
    }
    fetchEvent() {
        let searchParams = new HttpParams();
        return this.http
          .get<{ [key: string]: Salon }>(
            'https://proiectfinal-b9af1.firebaseio.com//booking.json',
            {
              headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
              params: searchParams,
              responseType: 'json'
            }
          )
          .pipe(
            map(responseData => {
              const postsArray: Salon[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            }),
            catchError(errorRes => {
              return throwError(errorRes);
            })
          );
      }
  }
