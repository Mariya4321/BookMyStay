import { TestBed } from '@angular/core/testing';
import { HotelDetailComponent } from './hotel-detail.component';

describe('HotelDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelDetailComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HotelDetailComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

