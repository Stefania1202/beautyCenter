import { Component, OnInit } from '@angular/core';
import { SalonsService } from './salons.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css'],
  providers: [SalonsService]
})
export class SalonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
