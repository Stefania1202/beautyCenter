import { Subject } from 'rxjs';
import { Salon } from './salon.model';

export class SalonService {
  salonsChanged = new Subject<Salon[]>();
  startedEditing = new Subject<number>();
  private salons: Salon[] = [
    new Salon('Apples', 5),
    new Salon('Tomatoes', 10),
  ];

  getSalons() {
    return this.salons.slice();
  }

  getIngredient(index: number) {
    return this.salons[index];
  }

  addSalon(salon: Salon) {
    this.salons.push(salon);
    this.salonsChanged.next(this.salons.slice());
  }

  addSalons(salons: Salon[]) {
    // for (let ingredient of salons) {
    //   this.addIngredient(ingredient);
    // }
    this.salons.push(...salons);
    this.salonsChanged.next(this.salons.slice());
  }

  updateSalon(index: number, newSalon: Salon) {
    this.salons[index] = newSalon;
    this.salonsChanged.next(this.salons.slice());
  }

  deleteSalon(index: number) {
    this.salons.splice(index, 1);
    this.salonsChanged.next(this.salons.slice());
  }
}
