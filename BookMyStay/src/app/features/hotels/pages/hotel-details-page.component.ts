import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HotelService } from '../data-access/hotel.service';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-hotel-details-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hotel-details-page.component.html',
  styleUrl: './hotel-details-page.component.css'
})
export class HotelDetailsPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly hotelService = inject(HotelService);
  private readonly destroyRef = inject(DestroyRef);

  readonly hotel = signal<Hotel | null>(null);
  readonly loading = signal(true);
  readonly invalidId = signal(false);
  readonly errorMessage = signal<string | null>(null);
  private hotelId: number | null = null;

  ngOnInit(): void {
    const idParameter = this.route.snapshot.paramMap.get('id');
    const hotelId = idParameter === null ? Number.NaN : Number(idParameter);

    if (!Number.isSafeInteger(hotelId) || hotelId <= 0) {
      this.invalidId.set(true);
      this.loading.set(false);
      return;
    }

    this.hotelId = hotelId;
    this.loadHotel();
  }

  loadHotel(): void {
    if (this.hotelId === null) {
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    this.hotelService.getHotelById(this.hotelId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (hotel) => {
          this.hotel.set(hotel);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('Hotel details could not be loaded. Please try again.');
          this.loading.set(false);
        }
      });
  }
}
