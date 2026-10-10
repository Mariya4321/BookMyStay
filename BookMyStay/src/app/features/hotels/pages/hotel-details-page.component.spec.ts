import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { HotelService } from '../data-access/hotel.service';
import { Hotel } from '../models/hotel.model';
import { HotelDetailsPageComponent } from './hotel-details-page.component';

describe('HotelDetailsPageComponent', () => {
  let getHotelById: jasmine.Spy<(id: number) => Observable<Hotel>>;
  let routeId: string;

  beforeEach(async () => {
    routeId = '7';
    getHotelById = jasmine.createSpy<(id: number) => Observable<Hotel>>('getHotelById')
      .and.returnValue(of({
        id: null,
        name: 'Harbor Hotel',
        description: 'A quiet stay by the sea',
        email: 'stay@example.com',
        imageUrl: 'https://example.com/harbor.jpg',
        createdAt: '2026-10-01T10:15:30'
      }));

    await TestBed.configureTestingModule({
      imports: [HotelDetailsPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useFactory: () => ({
            snapshot: { paramMap: convertToParamMap({ id: routeId }) }
          })
        },
        { provide: HotelService, useValue: { getHotelById } }
      ]
    }).compileComponents();
  });

  it('loads and displays hotel details', () => {
    const fixture = TestBed.createComponent(HotelDetailsPageComponent);
    fixture.detectChanges();

    expect(getHotelById).toHaveBeenCalledOnceWith(7);
    expect(fixture.nativeElement.textContent).toContain('Harbor Hotel');
    expect(fixture.nativeElement.textContent).toContain('A quiet stay by the sea');
    expect(fixture.nativeElement.querySelector('a[href="mailto:stay@example.com"]')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('img.hotel-image').getAttribute('src')).toBe('https://example.com/harbor.jpg');
  });

  it('shows an empty state and skips the request for an invalid ID', () => {
    routeId = 'invalid';
    const fixture = TestBed.createComponent(HotelDetailsPageComponent);
    fixture.detectChanges();

    expect(getHotelById).not.toHaveBeenCalled();
    expect(fixture.nativeElement.textContent).toContain('Hotel details unavailable');
    expect(fixture.nativeElement.querySelector('.action-link')).not.toBeNull();
  });

  it('shows an error and retries the request', () => {
    getHotelById.and.returnValues(
      throwError(() => new Error('Request failed')),
      of({
        id: null,
        name: 'Harbor Hotel',
        description: null,
        email: null,
        imageUrl: null,
        createdAt: null
      })
    );

    const fixture = TestBed.createComponent(HotelDetailsPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="alert"]')).not.toBeNull();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();

    expect(getHotelById).toHaveBeenCalledTimes(2);
    expect(fixture.nativeElement.querySelector('[role="alert"]')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Harbor Hotel');
  });
});
