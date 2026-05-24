import { TestBed } from '@angular/core/testing';
import { HotelFormComponent } from './hotel-form.component';

describe('HotelFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelFormComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HotelFormComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

