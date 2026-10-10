import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HotelRoom } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private readonly http = inject(HttpClient);

  getRoomsByHotel(hotelId: number): Observable<HotelRoom[]> {
    return this.http.get<HotelRoom[]>(`${environment.apiUrl}/room/hotel/${hotelId}`);
  }
}
