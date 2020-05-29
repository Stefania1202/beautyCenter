import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Salon } from '../salon.model';
import { SalonService } from '../salon.service';


@Component({
  selector: 'app-salon-edit',
  templateUrl: './salon-edit.component.html',
  styleUrls: ['./salon-edit.component.css']
})
export class SalonEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Salon;

  constructor(private slService: SalonService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          // this.editedItem = this.slService.getSalons(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            price: this.editedItem.price
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSalon = new Salon(value.name, value.price);
    if (this.editMode) {
      this.slService.updateSalon(this.editedItemIndex, newSalon);
    } else {
      this.slService.addSalon(newSalon);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteSalon(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
