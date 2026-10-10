import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { RoomService } from '../data-access/room.service';
import { HotelRoom } from '../models/room.model';
import { HotelRoomsPageComponent } from './hotel-rooms-page.component';

describe('HotelRoomsPageComponent', () => {
  let getRoomsByHotel: jasmine.Spy<(hotelId: number) => Observable<HotelRoom[]>>;
  let routeId: string;

  beforeEach(async () => {
    routeId = '7';
    getRoomsByHotel = jasmine.createSpy<(hotelId: number) => Observable<HotelRoom[]>>('getRoomsByHotel')
      .and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [HotelRoomsPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useFactory: () => ({
            snapshot: { paramMap: convertToParamMap({ id: routeId }) }
          })
        },
        { provide: RoomService, useValue: { getRoomsByHotel } }
      ]
    }).compileComponents();
  });

  it('loads and displays hotel room details', () => {
    getRoomsByHotel.and.returnValue(of([{
      id: 3,
      roomType: 'DELUXE',
      price: 149.5,
      totalRooms: 4,
      availableRooms: 2,
      capacity: 3,
      imageUrl: null,
      isActive: true,
      hotelId: 7
    }]));

    const fixture = TestBed.createComponent(HotelRoomsPageComponent);
    fixture.detectChanges();

    expect(getRoomsByHotel).toHaveBeenCalledOnceWith(7);
    expect(fixture.nativeElement.textContent).toContain('DELUXE');
    expect(fixture.nativeElement.textContent).toContain('Available');
    expect(fixture.nativeElement.textContent).toContain('Rooms available: 2 of 4');
  });

  it('shows the empty state when the hotel has no rooms', () => {
    const fixture = TestBed.createComponent(HotelRoomsPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No rooms listed yet');
    expect(fixture.nativeElement.querySelector('.room-card')).toBeNull();
  });

  it('shows an error and retries the request', () => {
    getRoomsByHotel.and.returnValues(
      throwError(() => new Error('Request failed')),
      of([])
    );

    const fixture = TestBed.createComponent(HotelRoomsPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="alert"]')).not.toBeNull();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();

    expect(getRoomsByHotel).toHaveBeenCalledTimes(2);
    expect(fixture.nativeElement.querySelector('[role="alert"]')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('No rooms listed yet');
  });
});
