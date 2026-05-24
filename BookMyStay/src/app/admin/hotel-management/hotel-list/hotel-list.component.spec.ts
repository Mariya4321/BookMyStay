import { TestBed } from '@angular/core/testing';
import { HotelListComponent } from './hotel-list.component';

describe('HotelListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelListComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HotelListComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

