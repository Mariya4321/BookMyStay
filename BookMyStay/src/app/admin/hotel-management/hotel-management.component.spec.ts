import { TestBed } from '@angular/core/testing';
import { HotelManagementComponent } from './hotel-management.component';

describe('HotelManagementComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelManagementComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HotelManagementComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

