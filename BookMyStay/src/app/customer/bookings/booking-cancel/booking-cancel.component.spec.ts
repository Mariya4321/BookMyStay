import { TestBed } from '@angular/core/testing';
import { BookingCancelComponent } from './booking-cancel.component';

describe('BookingCancelComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCancelComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookingCancelComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

