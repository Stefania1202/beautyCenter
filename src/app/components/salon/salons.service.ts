import { Salons } from './salons.model';

// tslint:disable-next-line: no-unused-expression
export class SalonsService {

    private salon: Salons[] = [
        new Salons('Test salons',
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
                  'https://studioinsign.ro/wp-content/uploads/2019/10/salon-de-beauty.jpg')

      ];


    getSalons() {
        return this.salon.slice();
    }
}

