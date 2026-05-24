import { TestBed } from '@angular/core/testing';
import { HotelDeleteComponent } from './hotel-delete.component';

describe('HotelDeleteComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelDeleteComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HotelDeleteComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

