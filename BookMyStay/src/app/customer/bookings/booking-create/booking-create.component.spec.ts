import { TestBed } from '@angular/core/testing';
import { BookingCreateComponent } from './booking-create.component';

describe('BookingCreateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCreateComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookingCreateComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

