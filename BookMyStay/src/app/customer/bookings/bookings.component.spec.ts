import { TestBed } from '@angular/core/testing';
import { BookingsComponent } from './bookings.component';

describe('BookingsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookingsComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

