import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Salons } from './salons.model';
import { SalonsService } from './salons.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor( private http: HttpClient, private salonsService: SalonsService ) {}

    storageSalon() {
        const salon = this.salonsService.getSalons();
        this.http.put(
            'https://proiectfinal-b9af1.firebaseio.com/salon.json',
             salon
            )
            .subscribe( response => {
            console.log(response);
        });
    }
}
