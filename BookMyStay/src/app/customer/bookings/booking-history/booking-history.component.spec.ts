import { TestBed } from '@angular/core/testing';
import { BookingHistoryComponent } from './booking-history.component';

describe('BookingHistoryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingHistoryComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookingHistoryComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

