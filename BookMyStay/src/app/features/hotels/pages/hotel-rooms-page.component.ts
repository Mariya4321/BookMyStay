import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoomService } from '../data-access/room.service';
import { HotelRoom } from '../models/room.model';

@Component({
  selector: 'app-hotel-rooms-page',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './hotel-rooms-page.component.html',
  styleUrl: './hotel-rooms-page.component.css'
})
export class HotelRoomsPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly roomService = inject(RoomService);
  private readonly destroyRef = inject(DestroyRef);

  readonly hotelId = signal<number | null>(null);
  readonly rooms = signal<HotelRoom[]>([]);
  readonly loading = signal(true);
  readonly invalidHotelId = signal(false);
  readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    const idParameter = this.route.snapshot.paramMap.get('id');
    const hotelId = idParameter === null ? Number.NaN : Number(idParameter);

    if (!Number.isSafeInteger(hotelId) || hotelId <= 0) {
      this.invalidHotelId.set(true);
      this.loading.set(false);
      return;
    }

    this.hotelId.set(hotelId);
    this.loadRooms();
  }

  loadRooms(): void {
    const hotelId = this.hotelId();
    if (hotelId === null) {
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    this.roomService.getRoomsByHotel(hotelId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (rooms) => {
          this.rooms.set(rooms);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('Rooms could not be loaded. Please try again.');
          this.loading.set(false);
        }
      });
  }
}
