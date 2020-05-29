import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Salon } from './salon.model';
import { SalonService } from './salon.service';


@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.css']
})
export class SalonsComponent implements OnInit {
  salons: Salon[];
  private subscription: Subscription;

  constructor(private slService: SalonService) { }
  ngOnInit() {
    this.salons = this.slService.getSalons();
    this.subscription = this.slService.salonsChanged
      .subscribe(
        (salons: Salon[]) => {
          this.salons = salons;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
