import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonItemComponent } from './salon-item.component';

describe('SalonItemComponent', () => {
  let component: SalonItemComponent;
  let fixture: ComponentFixture<SalonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
