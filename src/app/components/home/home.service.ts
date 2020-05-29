import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

export class Booking {
    salonName: string;
    date: Date;
    nameClient: string;
    email: string;
    phone: string;

}

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor( private db: AngularFireDatabase) {}

    createBooking(): AngularFireList <Booking> {
        const adDefault = new Booking();
        const addKey = this.db.list('./ads').push(adDefault).key;
        return this.db.list('/ads/' + addKey);
    }

    updateBooking( ad: AngularFireList <Booking>, data: any) {
        return ad.update('', data);
    }
}
