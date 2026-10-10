import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { HotelService } from '../data-access/hotel.service';
import { Hotel } from '../models/hotel.model';
import { HotelSearchPageComponent } from './hotel-search-page.component';

describe('HotelSearchPageComponent', () => {
  let getHotels: jasmine.Spy<() => Observable<Hotel[]>>;

  beforeEach(async () => {
    getHotels = jasmine.createSpy<() => Observable<Hotel[]>>('getHotels').and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [HotelSearchPageComponent],
      providers: [
        provideRouter([]),
        { provide: HotelService, useValue: { getHotels } }
      ]
    }).compileComponents();
  });

  it('loads and displays hotel results', () => {
    getHotels.and.returnValue(of([
      {
        id: 5,
        name: 'Harbor Hotel',
        description: 'A quiet stay by the sea',
        email: 'stay@example.com',
        imageUrl: 'https://example.com/harbor.jpg',
        createdAt: null
      }
    ]));

    const fixture = TestBed.createComponent(HotelSearchPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Harbor Hotel');
    expect(fixture.nativeElement.querySelector('a[href="mailto:stay@example.com"]')).not.toBeNull();
    const exploreLink = fixture.nativeElement.querySelector('.explore-link') as HTMLAnchorElement;
    expect(exploreLink.textContent).toContain('Explore rooms');
    expect(exploreLink.getAttribute('href')).toBe('/customer/hotel/5/rooms');
  });

  it('filters hotels by name and description', () => {
    getHotels.and.returnValue(of([
      { id: null, name: 'Harbor Hotel', description: 'Sea view', email: null, imageUrl: null, createdAt: null },
      { id: null, name: 'Garden Stay', description: 'Quiet courtyard', email: null, imageUrl: null, createdAt: null }
    ]));

    const fixture = TestBed.createComponent(HotelSearchPageComponent);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('#hotel-search') as HTMLInputElement;
    input.value = 'courtyard';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Garden Stay');
    expect(fixture.nativeElement.textContent).not.toContain('Harbor Hotel');
  });

  it('shows an error and allows retrying the request', () => {
    getHotels.and.returnValues(
      throwError(() => new Error('Request failed')),
      of([])
    );

    const fixture = TestBed.createComponent(HotelSearchPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="alert"]')).not.toBeNull();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();

    expect(getHotels).toHaveBeenCalledTimes(2);
    expect(fixture.nativeElement.querySelector('[role="alert"]')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('No hotels are available');
  });
});
