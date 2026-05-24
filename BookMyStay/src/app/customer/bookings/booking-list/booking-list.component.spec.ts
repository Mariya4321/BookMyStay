import { TestBed } from '@angular/core/testing';
import { BookingListComponent } from './booking-list.component';

describe('BookingListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingListComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookingListComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

