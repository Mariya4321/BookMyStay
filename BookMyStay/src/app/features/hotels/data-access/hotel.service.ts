import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Hotel } from '../models/hotel.model';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private readonly http = inject(HttpClient);

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${environment.apiUrl}/hotel/get`);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${environment.apiUrl}/hotel/${id}`);
  }
}
